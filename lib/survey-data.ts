export interface Question {
  id: string;
  text: string;
  textBn: string;
  type: 'likert' | 'radio' | 'binary';
  scale?: {
    min: number;
    max: number;
    minLabel: string;
    minLabelBn: string;
    maxLabel: string;
    maxLabelBn: string;
  };
  options?: Array<{
    label: string;
    labelBn?: string;
    value: number;
  }>;
}

export interface SurveyPart {
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  questions: Question[];
}

export interface AttentionCheck extends Question {
  correctAnswer: number;
}

export interface Survey {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  estimatedTime: number;
  status: 'active' | 'draft' | 'completed';
  createdAt: string;
  parts: Record<string, SurveyPart>;
  attentionChecks: Record<string, AttentionCheck>;
}

// Financial Stress Survey Data
export const financialStressSurvey: Survey = {
  id: 'financial-stress-career-confidence',
  title: 'Effect of Financial Stress on Students\' Future Career Confidence',
  titleBn: 'শিক্ষার্থীদের ভবিষ্যৎ ক্যারিয়ার আত্মবিশ্বাসে আর্থিক চাপের প্রভাব',
  description: 'A research study examining how financial stress affects students\' confidence about their future careers. This survey takes approximately 5 minutes to complete.',
  descriptionBn: 'একটি গবেষণা যা পরীক্ষা করে কিভাবে আর্থিক চাপ শিক্ষার্থীদের ভবিষ্যৎ ক্যারিয়ার সম্পর্কে আত্মবিশ্বাসকে প্রভাবিত করে। এই সমীক্ষা সম্পূর্ণ করতে প্রায় ৫ মিনিট সময় লাগে।',
  estimatedTime: 5,
  status: 'active',
  createdAt: '2024-01-28',
  parts: {
    part1: {
      title: 'Financial Situation',
      titleBn: 'আর্থিক অবস্থা',
      description: 'Please answer the following questions about your current financial situation.',
      descriptionBn: 'আপনার বর্তমান আর্থিক অবস্থা সম্পর্কে নিম্নলিখিত প্রশ্নগুলির উত্তর দিন।',
      questions: [
        {
          id: 'q1',
          text: 'Do you currently rely on your parents for your monthly expenses?',
          textBn: 'আপনি কি বর্তমানে আপনার মাসিক খরচের জন্য আপনার বাবা-মায়ের উপর নির্ভর করেন?',
          type: 'radio',
          options: [
            { label: 'Yes', labelBn: 'হ্যাঁ', value: 1 },
            { label: 'No', labelBn: 'না', value: 0 },
            { label: 'Partially', labelBn: 'আংশিকভাবে', value: 2 }
          ]
        },
        {
          id: 'q2',
          text: 'Do you often skip meals or eat less to save money?',
          textBn: 'আপনি কি প্রায়ই টাকা বাঁচানোর জন্য খাবার এড়িয়ে যান বা কম খান?',
          type: 'binary',
          options: [
            { label: 'Yes', labelBn: 'হ্যাঁ', value: 1 },
            { label: 'No', labelBn: 'না', value: 0 }
          ]
        },
        {
          id: 'q3',
          text: 'If you lost your current tuition/stipend, how worried would you be about your finances?',
          textBn: 'আপনি যদি আপনার বর্তমান টিউশন/বৃত্তি হারান, তাহলে আপনার আর্থিক অবস্থা নিয়ে আপনি কতটা চিন্তিত হবেন?',
          type: 'likert',
          scale: {
            min: 1,
            max: 5,
            minLabel: 'Not worried',
            minLabelBn: 'চিন্তিত নই',
            maxLabel: 'Extremely worried',
            maxLabelBn: 'অত্যন্ত চিন্তিত'
          }
        },
        {
          id: 'q4',
          text: 'If you suddenly needed 500 Taka for an emergency today, could you manage it without borrowing from a friend?',
          textBn: 'আজ যদি আপনার হঠাৎ জরুরি অবস্থায় ৫০০ টাকার প্রয়োজন হয়, তাহলে আপনি কি বন্ধুর কাছ থেকে ধার না নিয়ে তা সংস্থান করতে পারবেন?',
          type: 'binary',
          options: [
            { label: 'Yes', labelBn: 'হ্যাঁ', value: 1 },
            { label: 'No', labelBn: 'না', value: 0 }
          ]
        }
      ]
    },
    part2: {
      title: 'Future Career Confidence',
      titleBn: 'ভবিষ্যৎ ক্যারিয়ার আত্মবিশ্বাস',
      description: 'Please indicate how much you agree or disagree with each statement.',
      descriptionBn: 'প্রতিটি বক্তব্যের সাথে আপনি কতটা একমত বা অসম্মত তা নির্দেশ করুন।',
      questions: [
        {
          id: 'q5',
          text: 'I am confident that I will get a good job after graduation.',
          textBn: 'আমি আত্মবিশ্বাসী যে স্নাতক হওয়ার পর আমি একটি ভাল চাকরি পাব।',
          type: 'likert',
          scale: {
            min: 1,
            max: 7,
            minLabel: 'Strongly Disagree',
            minLabelBn: 'দৃঢ়ভাবে অসম্মত',
            maxLabel: 'Strongly Agree',
            maxLabelBn: 'দৃঢ়ভাবে সম্মত'
          }
        },
        {
          id: 'q6',
          text: 'I believe I will be able to support my family well in the future.',
          textBn: 'আমি বিশ্বাস করি ভবিষ্যতে আমি আমার পরিবারকে ভালভাবে সহায়তা করতে পারব।',
          type: 'likert',
          scale: {
            min: 1,
            max: 7,
            minLabel: 'Strongly Disagree',
            minLabelBn: 'দৃঢ়ভাবে অসম্মত',
            maxLabel: 'Strongly Agree',
            maxLabelBn: 'দৃঢ়ভাবে সম্মত'
          }
        },
        {
          id: 'q7',
          text: 'I feel optimistic (hopeful) about my career.',
          textBn: 'আমি আমার ক্যারিয়ার সম্পর্কে আশাবাদী (আশাপূর্ণ) বোধ করি।',
          type: 'likert',
          scale: {
            min: 1,
            max: 7,
            minLabel: 'Strongly Disagree',
            minLabelBn: 'দৃঢ়ভাবে অসম্মত',
            maxLabel: 'Strongly Agree',
            maxLabelBn: 'দৃঢ়ভাবে সম্মত'
          }
        },
        {
          id: 'q8',
          text: 'I believe my hard work will pay off eventually.',
          textBn: 'আমি বিশ্বাস করি আমার কঠোর পরিশ্রম শেষ পর্যন্ত ফল দেবে।',
          type: 'likert',
          scale: {
            min: 1,
            max: 7,
            minLabel: 'Strongly Disagree',
            minLabelBn: 'দৃঢ়ভাবে অসম্মত',
            maxLabel: 'Strongly Agree',
            maxLabelBn: 'দৃঢ়ভাবে সম্মত'
          }
        }
      ]
    },
    part3: {
      title: 'Background Information',
      titleBn: 'পটভূমি তথ্য',
      description: 'Finally, please provide some background information.',
      descriptionBn: 'অবশেষে, অনুগ্রহ করে কিছু পটভূমি তথ্য প্রদান করুন।',
      questions: [
        {
          id: 'q9',
          text: 'On average, how many hours do you sleep per night?',
          textBn: 'গড়ে প্রতি রাতে আপনি কত ঘন্টা ঘুমান?',
          type: 'radio',
          options: [
            { label: '<5', value: 1 },
            { label: '5–6', value: 2 },
            { label: '6–7', value: 3 },
            { label: '7–8', value: 4 },
            { label: '>8', value: 5 }
          ]
        },
        {
          id: 'q10',
          text: 'What is your current year of study?',
          textBn: 'আপনার বর্তমান অধ্যয়নের বছর কত?',
          type: 'radio',
          options: [
            { label: '1st', labelBn: '১ম', value: 1 },
            { label: '2nd', labelBn: '২য়', value: 2 },
            { label: '3rd', labelBn: '৩য়', value: 3 },
            { label: '4th', labelBn: '৪র্থ', value: 4 }
          ]
        },
        {
          id: 'q11',
          text: 'What is your approximate monthly budget for personal expenses?',
          textBn: 'ব্যক্তিগত খরচের জন্য আপনার আনুমানিক মাসিক বাজেট কত?',
          type: 'radio',
          options: [
            { label: '<2000', value: 1 },
            { label: '2000–3999', value: 2 },
            { label: '4000–5999', value: 3 },
            { label: '6000+', value: 4 }
          ]
        }
      ]
    }
  },
  attentionChecks: {
    A: {
      id: 'attention_check',
      text: 'I have never used a computer or smartphone in my entire life. Please select \'Strongly Disagree\' to show you are reading carefully.',
      textBn: 'আমি আমার সারা জীবনে কখনো কম্পিউটার বা স্মার্টফোন ব্যবহার করিনি। আপনি যে মনোযোগ দিয়ে পড়ছেন তা দেখানোর জন্য অনুগ্রহ করে \'দৃঢ়ভাবে অসম্মত\' নির্বাচন করুন।',
      type: 'likert',
      scale: {
        min: 1,
        max: 7,
        minLabel: 'Strongly Disagree',
        minLabelBn: 'দৃঢ়ভাবে অসম্মত',
        maxLabel: 'Strongly Agree',
        maxLabelBn: 'দৃঢ়ভাবে সম্মত'
      },
      correctAnswer: 1
    },
    B: {
      id: 'attention_check',
      text: 'I pay close attention to all questions in surveys. If you are reading this carefully, please select the number 4.',
      textBn: 'আমি সমীক্ষার সব প্রশ্নে মনোযোগ দিয়ে থাকি। আপনি যদি এটি মনোযোগ দিয়ে পড়ে থাকেন, তাহলে অনুগ্রহ করে ৪ নম্বর নির্বাচন করুন।',
      type: 'likert',
      scale: {
        min: 1,
        max: 7,
        minLabel: 'Strongly Disagree',
        minLabelBn: 'দৃঢ়ভাবে অসম্মত',
        maxLabel: 'Strongly Agree',
        maxLabelBn: 'দৃঢ়ভাবে সম্মত'
      },
      correctAnswer: 4
    }
  }
};

// Survey list for the main survey page
export const surveyList: Survey[] = [
  financialStressSurvey
];