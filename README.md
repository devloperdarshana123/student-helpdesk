# 🎓 Student Helpdesk AI Chatbot

A modern full-stack web application built using **Next.js**, **Clerk Authentication**, and **OpenAI** that provides students with an AI-powered chatbot for instant help related to studies, exams, and career guidance.

The platform offers a clean UI, secure authentication, and a responsive chat experience.

---

## 🚀 Features

- 🤖 AI Chatbot for student queries  
- 🔐 Secure authentication using Clerk (Google / Email login)  
- 🔁 Auto redirect to chatbot after login  
- 💬 Real-time chat interface with modern UI  
- 📱 Fully responsive design  
- 🧠 AI responses formatted for easy understanding  
- 🧭 Protected routes (only logged-in users can access chat)  
- ⚡ Fast performance with Next.js App Router  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 16, React, Tailwind CSS  
- **Authentication:** Clerk  
- **AI:** OpenAI API  
- **Backend:** Next.js API Routes  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure

student-helpdesk/
├── app/
│ ├── api/
│ │ └── chatbot/
│ │ └── route.ts
│ ├── chat/
│ │ └── page.tsx
│ ├── sign-in/
│ ├── sign-up/
│ └── components/
├── public/
├── .env.local
├── package.json
└── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/student-helpdesk.git
cd student-helpdesk
