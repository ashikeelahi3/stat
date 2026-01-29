# 📋 UPDATED STUDY DOCUMENT
## **Effect of Financial Stress on Students' Future Career Confidence: A Question-Order Study**

---

# 📝 INSTRUCTIONS TO RESPONDENTS

> Dear participant,
> This survey is part of an academic research study. Please answer all questions honestly. There are no right or wrong answers.
> Your responses are **anonymous** and will be used only for research purposes.
> 
> **Note:** This survey includes an attention check question to ensure data quality. Please read all questions carefully.

---

# 🔹 PART 1 – FINANCIAL STRESS PRIME

**Purpose:** To measure current financial situation and trigger awareness of financial stress.

| Q | Question                                                                                                     | Response Options                       | Coding                   |
| - | ------------------------------------------------------------------------------------------------------------ | -------------------------------------- | ------------------------ |
| 1 | Do you currently rely on your parents for your monthly expenses?                                             | Yes / No / Partially                   | Yes=1, No=0, Partially=2 |
| 2 | Do you often skip meals or eat less to save money?                                                           | Yes / No                               | Yes=1, No=0              |
| 3 | If you lost your current tuition/pupil, how worried would you be about your finances?                        | 1 = Not worried, 5 = Extremely worried | 1–5                      |
| 4 | If you suddenly needed 500 Taka for an emergency today, could you manage it without borrowing from a friend? | Yes / No                               | Yes=1, No=0              |

> ⚡ Note: This part is the "prime" — it is expected to influence Part 2 responses if asked first.

---

# 🔹 PART 2 – FUTURE CAREER CONFIDENCE (Dependent Variables)

**Purpose:** To measure students' self-reported confidence about their future career.

**Scale:** 1 = Strongly Disagree, 7 = Strongly Agree

| Q | Question                                                          | Scale |
| - | ----------------------------------------------------------------- | ----- |
| 5 | I am confident that I will get a good job after graduation.       | 1–7   |
| 6 | I believe I will be able to support my family well in the future. | 1–7   |
| 7 | I feel optimistic (hopeful) about my career.                      | 1–7   |
| 8 | I believe my hard work will pay off eventually.                   | 1–7   |

> ⚡ Tip: For analysis, you can create a **composite Career Confidence Score** = average of Q5–Q8.

---

# 🔹 PART 3 – CONTROL VARIABLES (Optional but Recommended)

| Q  | Question                                                       | Response Options                      | Coding |
| -- | -------------------------------------------------------------- | ------------------------------------- | ------ |
| 9  | On average, how many hours do you sleep per night?             | <5 / 5–6 / 6–7 / 7–8 / >8             | 1–5    |
| 10 | What is your current year of study?                            | 1st / 2nd / 3rd / 4th                 | 1–4    |
| 11 | What is your approximate monthly budget for personal expenses? | <2000 / 2000–3999 / 4000–5999 / 6000+ | 1–4    |

> These are **not primary outcomes**, but you can include them in regression as **controls**.

---

# 🔹 ATTENTION CHECK QUESTION

**Purpose:** To identify and filter out inattentive or careless respondents.

**Implementation:** ONE of the following will be randomly shown to each participant at a random position (Q4-Q8):

### **Attention Check Type A (50% of participants):**
| Q  | Question                                                                                                                    | Scale | Coding |
|----|-----------------------------------------------------------------------------------------------------------------------------|-------|--------|
| AC | I have never used a computer or smartphone in my entire life. Please select 'Strongly Disagree' to show you are reading carefully. | 1–7   | Correct=1 |

**Scale:** 1 = Strongly Disagree ... 7 = Strongly Agree  
**Correct Answer:** 1 (Strongly Disagree)

---

### **Attention Check Type B (50% of participants):**
| Q  | Question                                                                                          | Scale | Coding |
|----|---------------------------------------------------------------------------------------------------|-------|--------|
| AC | I pay close attention to all questions in surveys. If you are reading this carefully, please select the number 4. | 1–7   | Correct=4 |

**Scale:** 1 = Strongly Disagree ... 7 = Strongly Agree  
**Correct Answer:** 4

---

> ⚡ **Important Notes:**
> - The attention check appears **identical** to other questions (same styling, no warning)
> - Position is **randomized** between Q4-Q8 to prevent pattern recognition
> - Participants who fail the attention check will be **flagged** for potential exclusion from analysis
> - Type (A or B) is randomly assigned per participant

---

# 🔹 EXPERIMENTAL DESIGN NOTES

## **Randomization Structure:**

Each participant receives **THREE random assignments:**

1. **Survey Version (Question Order):**
   * **Version A (50%):** Part 1 → Part 2 → Part 3
   * **Version B (50%):** Part 2 → Part 1 → Part 3

2. **Attention Check Type:**
   * **Type A (50%):** "Never used computer" statement
   * **Type B (50%):** "Select number 4" instruction

3. **Attention Check Position:**
   * Randomly placed at Q4, Q5, Q6, Q7, or Q8 (20% each)

**Total possible combinations:** 2 × 2 × 5 = **20 configurations**

---

## **Variables:**

### **Independent Variable:**
- **Question Order** (Binary: 0 = Part 2 first, 1 = Part 1 first)

### **Dependent Variables:**
- **Career Confidence Composite Score** = Average(Q5, Q6, Q7, Q8)
- Optional: Each item (Q5–Q8) analyzed separately

### **Control Variables:**
- Sleep hours (Q9)
- Year of study (Q10)
- Monthly budget (Q11)

### **Data Quality Variables:**
- Attention check type (A or B)
- Attention check position (4-8)
- Attention check passed (TRUE/FALSE)
- Time spent per question (seconds)
- Total survey time (seconds)

---

## **Statistical Analysis Plan:**

### **Primary Analysis:**
1. **Data Cleaning:**
   - Exclude responses that failed attention check (recommended)
   - OR flag and run sensitivity analysis with/without flagged responses
   - Check for duplicate IPs (if tracked)
   - Remove responses with suspiciously fast completion (<90 seconds)

2. **Descriptive Statistics:**
   - Sample characteristics (N, demographics)
   - Attention check pass rate by type
   - Average completion time by version

3. **Main Analysis:**
   - **Independent samples t-test:**  
     Compare Career Confidence scores between Version A vs Version B
   
   - **Multiple regression:**
     ```
     CareerConfidence ~ Version + Sleep + Year + Budget + (optional controls)
     ```

4. **Sensitivity Analysis:**
   - Analysis with only valid responses (passed attention check)
   - Analysis with all responses (to check robustness)
   - Comparison of results

5. **Additional Analyses (Optional):**
   - Analyze each Q5-Q8 separately (4 separate t-tests)
   - Check if attention check position affected results
   - Examine time spent patterns between versions

---

## **Hypothesis:**

> **H₁:** Students who answer financial stress questions first (Version A) will report **lower career confidence** than those who answer career confidence questions first (Version B).
> 
> **Mechanism:** Financial stress priming activates financial worries, which then negatively influences subsequent career confidence ratings (order effect).

---

# 🔹 CODING SUMMARY (for SPSS/R/Python)

| Variable                    | Type     | Values/Range                                              | Notes                                    |
|-----------------------------|----------|-----------------------------------------------------------|------------------------------------------|
| **Meta Variables**          |          |                                                           |                                          |
| id                          | UUID     | Auto-generated                                            | Unique response identifier               |
| created_at                  | DateTime | Timestamp                                                 | Submission time                          |
| version                     | Binary   | A=1, B=0                                                  | Question order                           |
| device_type                 | Binary   | mobile=1, desktop=0                                       | Device used                              |
| **Part 1: Financial Stress**|          |                                                           |                                          |
| q1_parental_support         | Ordinal  | 0=No, 1=Yes, 2=Partially                                  |                                          |
| q2_skip_meals               | Binary   | 0=No, 1=Yes                                               |                                          |
| q3_tuition_worry            | Ordinal  | 1–5                                                       | 1=Not worried, 5=Extremely worried       |
| q4_emergency_funds          | Binary   | 0=No, 1=Yes                                               | Can manage 500 Taka emergency            |
| **Part 2: Career Confidence**|         |                                                           |                                          |
| q5_job_confidence           | Ordinal  | 1–7                                                       | 1=Strongly Disagree, 7=Strongly Agree    |
| q6_family_support           | Ordinal  | 1–7                                                       | Same scale                               |
| q7_career_optimism          | Ordinal  | 1–7                                                       | Same scale                               |
| q8_hardwork_payoff          | Ordinal  | 1–7                                                       | Same scale                               |
| **career_confidence_score** | Continuous | 1–7                                                     | **Composite = Mean(Q5-Q8)**              |
| **Part 3: Controls**        |          |                                                           |                                          |
| q9_sleep_hours              | Ordinal  | 1=<5, 2=5-6, 3=6-7, 4=7-8, 5=>8                          |                                          |
| q10_year_of_study           | Ordinal  | 1–4                                                       | 1=1st year, 4=4th year                   |
| q11_monthly_budget          | Ordinal  | 1=<2000, 2=2000-3999, 3=4000-5999, 4=6000+               | In Taka                                  |
| **Attention Check**         |          |                                                           |                                          |
| attention_check_type        | Binary   | A, B                                                      | Which check shown                        |
| attention_check_position    | Ordinal  | 4, 5, 6, 7, 8                                             | Where it appeared                        |
| attention_check_response    | Ordinal  | 1–7                                                       | Participant's answer                     |
| attention_check_passed      | Binary   | 0=Failed, 1=Passed                                        | **Use for filtering**                    |
| **Timing Variables**        |          |                                                           |                                          |
| q1_time_spent               | Continuous | Seconds                                                 | Time on Q1                               |
| q2_time_spent               | Continuous | Seconds                                                 | Time on Q2                               |
| ... (q3-q11_time_spent)     | Continuous | Seconds                                                 | Time on each question                    |
| attention_check_time_spent  | Continuous | Seconds                                                 | Time on attention check                  |
| total_survey_time           | Continuous | Seconds                                                 | Total time for survey only               |
| **Game Data**               |          |                                                           |                                          |
| game_score                  | Continuous | 0–300+                                                  | Score from Coin Catch game               |
| total_time                  | Continuous | Seconds                                                 | Survey + game time                       |

---

# 🔹 DATA QUALITY & EXCLUSION CRITERIA

## **Recommended Exclusion Rules:**

1. **Attention Check Failure:**
   - Exclude if `attention_check_passed = FALSE`
   - Expected exclusion rate: 5-10%

2. **Speeders:**
   - Exclude if `total_survey_time < 90 seconds`
   - (Indicates insufficient reading/thinking)

3. **Straight-lining:**
   - Check if all Q5-Q8 have identical values
   - May indicate disengagement

4. **Incomplete Responses:**
   - Already handled (survey requires all fields)

## **Quality Metrics to Report:**

- Total responses collected: N
- Valid responses (passed all checks): N_valid
- Exclusion rate: (N - N_valid) / N × 100%
- Attention check pass rate by type (A vs B)
- Average completion time (valid responses)

---

# 🔹 TOTAL SURVEY LENGTH

* **Survey Questions:** 11 (Q1-Q11)
* **Attention Check:** +1 (randomly inserted)
* **Total Questions Seen:** 12
* **Estimated Time:** 4–6 minutes (survey) + 0.5 min (game) = **~5 minutes total**
* **Clear constructs** → strong for **question-order analysis**
* **Attention check** → ensures **high data quality**
* **Examiner-friendly** → rigorous methodology

---

# 🔹 ADVANTAGES OF THIS DESIGN

✅ **Methodological Rigor:**
- Randomized controlled design
- Attention check for quality control
- Time tracking for additional insights
- Balanced group assignment

✅ **Data Quality:**
- Filters careless respondents
- Tracks engagement via timing
- Anonymous to encourage honesty

✅ **Analysis Flexibility:**
- Can analyze with/without flagged responses
- Time data enables additional research questions
- Control variables for regression

✅ **Participant Experience:**
- Quick completion (~5 min)
- Engaging game reward
- Professional presentation
- Mobile-friendly

---

# 📊 SAMPLE SPSS SYNTAX (After Export)

```spss
* Import data
GET DATA
  /TYPE=TXT
  /FILE='survey_data.csv'
  /DELIMITERS=","
  /FIRSTCASE=2
  /VARIABLES=
    id A50
    version A1
    q5_job_confidence F1
    q6_family_support F1
    q7_career_optimism F1
    q8_hardwork_payoff F1
    attention_check_passed F1.

* Create composite score
COMPUTE career_confidence = MEAN(q5_job_confidence, q6_family_support, 
                                  q7_career_optimism, q8_hardwork_payoff).
EXECUTE.

* Filter valid responses only
USE ALL.
COMPUTE filter_valid = (attention_check_passed = 1).
FILTER BY filter_valid.

* Descriptive statistics by version
MEANS TABLES=career_confidence BY version
  /CELLS=MEAN COUNT STDDEV.

* Independent samples t-test
T-TEST GROUPS=version('A' 'B')
  /VARIABLES=career_confidence
  /CRITERIA=CI(.95).

* Multiple regression with controls
REGRESSION
  /DEPENDENT career_confidence
  /METHOD=ENTER version q9_sleep_hours q10_year_of_study q11_monthly_budget.
```

---

# 📈 EXPECTED RESULTS TABLE

| Version | N   | Mean Career Confidence | SD   | t-value | p-value |
|---------|-----|------------------------|------|---------|---------|
| A       | 120 | 4.85                   | 1.12 | -2.45   | .015    |
| B       | 118 | 5.23                   | 1.08 |         |         |

*(Hypothetical example showing Version A has lower confidence due to financial stress priming)*

---

**This design is publication-ready and follows best practices in experimental psychology and survey research!** 🎓