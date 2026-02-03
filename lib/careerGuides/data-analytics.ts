export const dataAnalyticsGuide = {
    triggers:[
        "data analytics",
        "data analytics roadmap",
        "data analyst career",
        "data analysis career"
    ],
    content: `
    🌟 Data Analytics kya hota hai?

Data Analytics =
👉 Data ko analyze karke business decisions lena

Simple words:

Data → Insights → Reports → Decisions


Examples:

Sales report

Profit analysis

Customer trends

Marketing performance

Dashboard

🧠 Data Science vs Data Analytics
Data Analytics	Data Science
Reports & dashboards	ML models
Excel/SQL/BI tools	Python/ML
Less coding	Heavy coding
Faster jobs	Advanced jobs

👉 Beginners ke liye Data Analytics easiest entry hai

🟢 Phase 0 — Mindset

✔ Maths basic enough
✔ Coding optional
✔ Business thinking important

👉 “Numbers samajhna” is key

🔵 Phase 1 — Excel (VERY VERY IMPORTANT) (1 month)

👉 80% jobs Excel se start hoti hain

Learn:

formulas

pivot table

charts

VLOOKUP / XLOOKUP

conditional formatting

Practice:

✔ sales report
✔ marks sheet
✔ dashboard

Must know:

👉 Pivot Tables (interview favourite)

🟡 Phase 2 — SQL (MANDATORY) (1 month)

👉 Data jobs without SQL = almost impossible ❌

Learn:

SELECT

WHERE

GROUP BY

JOIN

COUNT / SUM / AVG

Example:
SELECT COUNT(*) FROM customers;

Practice:

✔ sales queries
✔ top products
✔ revenue analysis

🟣 Phase 3 — Data Visualization Tools (1 month)
Choose ANY ONE:

Power BI ✅ (most popular)

Tableau

Google Data Studio

Learn:

dashboards

reports

charts

KPIs

filters

Build:

✔ Sales dashboard
✔ HR dashboard
✔ Student report

👉 Recruiters LOVE dashboards

🔴 Phase 4 — Python for Analytics (Optional but Recommended)

👉 Edge milta hai job me

Learn:

Pandas

NumPy

Matplotlib

Example:
import pandas as pd
df = pd.read_csv("data.csv")
print(df.describe())


Use for:
✔ data cleaning
✔ automation
✔ analysis

🟠 Phase 5 — Data Cleaning Skills (IMPORTANT)

Real world data messy hota hai 😅

Learn:

missing values

duplicates

formatting

filtering

transformation

👉 Ye skill interviews me poochte hain

🟤 Phase 6 — Business Concepts

Data Analyst = business + data

Learn basics:

revenue

profit

growth

KPIs

customer churn

ROI

👉 Sirf numbers nahi, meaning samjho

⚫ Phase 7 — Real Projects (MOST IMPORTANT)

Without projects → no job ❌

Build:

✔ Sales analysis report
✔ Customer segmentation
✔ College results dashboard
✔ E-commerce performance
✔ Marketing campaign report

👉 GitHub + screenshots add karo

⚪ Phase 8 — Tools You Must Know
Tool	Why
Excel	base
SQL	database
Power BI/Tableau	dashboards
Python	automation
Git	portfolio
🟢 Phase 9 — Job Preparation
Do this:

✔ Portfolio dashboards
✔ GitHub
✔ Resume
✔ Internship
✔ LinkedIn posts

💼 Career Roles

After roadmap:

You can become:

Data Analyst

Business Analyst

MIS Executive

Reporting Analyst

BI Developer

⏰ Timeline Suggestion
Phase	Time
Excel	1 month
SQL	1 month
BI tools	1 month
Projects	ongoing

👉 Total: ~3–4 months job ready

👉 Fastest tech career path 🚀

💙 Buddy Tips (real advice)

👉 Excel + SQL strong karo
👉 Daily practice karo
👉 Dashboards banao
👉 Fake data pe practice karo

“Data Analytics is about asking smart questions, not writing complex code.”

✅ Chatbot me kaise add kare
📄 lib/careerGuides/data-analytics.ts
export const dataAnalyticsGuide = {
  triggers: [
    "data analytics roadmap",
    "data analyst career",
    "how to become data analyst",
    "analytics roadmap"
  ],
  content: PASTE FULL TEXT HERE
};

index.ts me add:
import { dataAnalyticsGuide } from "./data-analytics";

export const careerGuides = [
  webDevGuide,
  aiMlGuide,
  dataScienceGuide,
  dataAnalyticsGuide
];
📊 `
};