'use client';

import { motion } from 'framer-motion';
import { surveyList } from '@/lib/survey-data';
import SurveyCard from '@/components/SurveyCard';

export default function Survey() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Header */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-zinc-50 mb-4">
              Research Surveys
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Participate in academic research studies and contribute to scientific knowledge.
              All surveys are anonymous and designed by researchers.
            </p>
          </motion.div>

          {/* Survey List */}
          <div className="space-y-8">
            {surveyList.map((survey, index) => (
              <SurveyCard key={survey.id} survey={survey} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {surveyList.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
                No surveys available
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Check back later for new research studies.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}