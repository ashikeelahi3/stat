'use client';

import { motion } from 'framer-motion';
import type { Question, AttentionCheck } from '@/lib/survey-data';

interface QuestionCardProps {
  question: Question | AttentionCheck;
  value?: number;
  onChange: (value: number) => void;
  index: number;
}

export default function QuestionCard({ question, value, onChange, index }: QuestionCardProps) {
  const renderLikertScale = () => {
    if (!question.scale) return null;

    const { min, max, minLabel, maxLabel } = question.scale;
    const options = [];
    
    for (let i = min; i <= max; i++) {
      options.push(i);
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
          <div className="text-center">
            <div>{minLabel}</div>
            {question.scale.minLabelBn && (
              <div className="text-xs">{question.scale.minLabelBn}</div>
            )}
          </div>
          <div className="text-center">
            <div>{maxLabel}</div>
            {question.scale.maxLabelBn && (
              <div className="text-xs">{question.scale.maxLabelBn}</div>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-1 md:gap-4">
          {options.map((option) => (
            <motion.button
              key={option}
              onClick={() => onChange(option)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-8 h-8 md:w-14 md:h-14 rounded-full border-2 font-semibold transition-all duration-200 ${
                value === option
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600 text-black dark:text-zinc-50 hover:border-blue-400 hover:shadow-md'
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>
        
      </div>
    );
  };

  const renderRadioOptions = () => {
    if (!question.options) return null;

    return (
      <div className="space-y-3">
        {question.options.map((option) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              value === option.value
                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-600 text-blue-700 dark:text-blue-300'
                : 'bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600 text-black dark:text-zinc-50 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                value === option.value
                  ? 'border-blue-600 bg-blue-600'
                  : 'border-zinc-400 dark:border-zinc-500'
              }`}>
                {value === option.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="font-medium">{option.label}</span>
            </div>
          </motion.button>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 md:p-8"
    >
      {/* Question Text */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-black dark:text-zinc-50 mb-2">
          {question.text}
        </h3>
        {question.textBn && (
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
            {question.textBn}
          </p>
        )}
      </div>

      {/* Response Options */}
      <div>
        {question.type === 'likert' && renderLikertScale()}
        {(question.type === 'radio' || question.type === 'binary') && renderRadioOptions()}
      </div>
    </motion.div>
  );
}