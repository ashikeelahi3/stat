'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Survey } from '@/lib/survey-data';

interface SurveyCardProps {
  survey: Survey;
  index: number;
}

export default function SurveyCard({ survey, index }: SurveyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Header */}
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              {survey.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">
              {survey.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
              <span className="flex items-center gap-1">
                ⏱️ {survey.estimatedTime} minutes
              </span>
              <span className="flex items-center gap-1">
                📅 {survey.createdAt}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                survey.status === 'active' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : survey.status === 'draft'
                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
              }`}>
                {survey.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Preview */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {Object.entries(survey.parts).map(([key, part]) => (
            <div key={key} className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4">
              <h3 className="font-medium text-black dark:text-zinc-50 mb-1">
                {part.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                {part.description}
              </p>
              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                {part.questions.length} questions
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-zinc-500 dark:text-zinc-500">
            Total: {Object.values(survey.parts).reduce((total, part) => total + part.questions.length, 0)} questions
          </div>
          
          {survey.status === 'active' ? (
            <Link href={`/survey/${survey.id}`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Survey
              </motion.button>
            </Link>
          ) : (
            <button
              disabled
              className="bg-zinc-300 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 px-6 py-3 rounded-xl font-medium cursor-not-allowed"
            >
              {survey.status === 'draft' ? 'Coming Soon' : 'Completed'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}