'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { financialStressSurvey } from '@/lib/survey-data';
import type { Survey, Question, AttentionCheck } from '@/lib/survey-data';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';

interface SurveyResponse {
  version: 'A' | 'B';
  attentionCheckType: 'A' | 'B';
  attentionCheckPosition: number;
  deviceType: 'mobile' | 'desktop';
  responses: Record<string, number>;
  timings: Record<string, number>;
  startTime: number;
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function SurveyPage({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [surveyData, setSurveyData] = useState<SurveyResponse | null>(null);
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [surveyOrder, setSurveyOrder] = useState<any[]>([]);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [sectionStartTime, setSectionStartTime] = useState(Date.now());

  useEffect(() => {
    // Load survey data based on ID
    if (id === 'financial-stress-career-confidence') {
      setSurvey(financialStressSurvey);
    } else {
      router.push('/survey');
      return;
    }

    // Initialize survey with randomization
    const version = Math.random() < 0.5 ? 'A' : 'B';
    const attentionCheckType = Math.random() < 0.5 ? 'A' : 'B';
    const attentionCheckPosition = Math.floor(Math.random() * 5) + 4; // Q4-Q8
    const deviceType = window.innerWidth < 768 ? 'mobile' : 'desktop';

    // Build part order based on version
    let partOrder: any[] = [];
    if (version === 'A') {
      partOrder = [
        financialStressSurvey.parts.part1,
        financialStressSurvey.parts.part2,
        financialStressSurvey.parts.part3
      ];
    } else {
      partOrder = [
        financialStressSurvey.parts.part2,
        financialStressSurvey.parts.part1,
        financialStressSurvey.parts.part3
      ];
    }

    // Insert attention check into appropriate part
    const attentionCheck = financialStressSurvey.attentionChecks[attentionCheckType];
    const targetPart = attentionCheckPosition <= 4 ? 0 : 1;
    const insertPosition = attentionCheckPosition <= 4 ? attentionCheckPosition - 1 : attentionCheckPosition - 5;
    
    partOrder[targetPart] = {
      ...partOrder[targetPart],
      questions: [
        ...partOrder[targetPart].questions.slice(0, insertPosition),
        attentionCheck,
        ...partOrder[targetPart].questions.slice(insertPosition)
      ]
    };

    setSurveyOrder(partOrder);
    setSurveyData({
      version,
      attentionCheckType,
      attentionCheckPosition,
      deviceType,
      responses: {},
      timings: {},
      startTime: Date.now()
    });
    setSectionStartTime(Date.now());
  }, [id, router]);

  const handleResponse = (questionId: string, value: number) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const handleContinue = () => {
    if (!surveyData) return;

    const timeSpent = Math.round((Date.now() - sectionStartTime) / 1000);

    // Save all responses from current section
    const updatedSurveyData = {
      ...surveyData,
      responses: { ...surveyData.responses, ...responses },
      timings: {
        ...surveyData.timings,
        [`part${currentPartIndex + 1}`]: timeSpent
      }
    };

    setSurveyData(updatedSurveyData);

    if (currentPartIndex < surveyOrder.length - 1) {
      setCurrentPartIndex(currentPartIndex + 1);
      setResponses({});
      setSectionStartTime(Date.now());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Survey complete - save and redirect to game
      localStorage.setItem('surveyData', JSON.stringify(updatedSurveyData));
      router.push('/game');
    }
  };

  const isCurrentSectionComplete = () => {
    if (surveyOrder.length === 0) return false;
    const currentPart = surveyOrder[currentPartIndex];
    return currentPart.questions.every((q: any) => responses[q.id] !== undefined);
  };

  if (!survey || !surveyData || surveyOrder.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-black dark:text-zinc-50 text-xl"
        >
          Loading survey...
        </motion.div>
      </div>
    );
  }

  const currentPart = surveyOrder[currentPartIndex];
  
  // Calculate progress
  const totalQuestions = surveyOrder.reduce((total, part) => total + part.questions.length, 0);
  const answeredQuestions = Object.keys(responses).length + Object.keys(surveyData.responses).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pb-20">
      {/* Main Content */}
      <div className="mt-26 px-0 md:px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPartIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-zinc-900 rounded-none md:rounded-2xl shadow-xl border-0 md:border border-zinc-200 dark:border-zinc-800 p-4 md:p-12"
            >
              {/* Section Header */}
              <div className="mb-12">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-black dark:text-zinc-50 mb-4"
                >
                  {currentPart.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-zinc-600 dark:text-zinc-400"
                >
                  {currentPart.description}
                </motion.p>
              </div>

              {/* Questions */}
              <div className="space-y-8">
                {currentPart.questions.map(
                  (question: Question | AttentionCheck, index: number) => (
                    <QuestionCard
                      key={question.id}
                      question={question}
                      value={responses[question.id]}
                      onChange={(value) => handleResponse(question.id, value)}
                      index={index}
                    />
                  ),
                )}
              </div>

              {/* Continue Button */}
              <div className="mt-12 flex justify-end">
                <motion.button
                  onClick={handleContinue}
                  disabled={!isCurrentSectionComplete()}
                  whileHover={isCurrentSectionComplete() ? { scale: 1.02 } : {}}
                  whileTap={isCurrentSectionComplete() ? { scale: 0.98 } : {}}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    isCurrentSectionComplete()
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                      : "bg-zinc-300 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 cursor-not-allowed"
                  }`}
                >
                  {currentPartIndex < surveyOrder.length - 1
                    ? "Continue"
                    : "Complete Survey"}
                </motion.button>
              </div>
        {/* Progress Info */}
        <div className="mx-8 mt-8">
          <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
            <span>
              Part {currentPartIndex + 1} of {surveyOrder.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar progress={progress} />
    </div>
  );
}