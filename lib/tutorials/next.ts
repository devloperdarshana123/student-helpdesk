export const nextTutorial = {
    topic: "nextjs",
    triggers: [
        "nextjs tutorial",
        "next.js tutorial",
        "next tutorial",
        "nextjs sikhao",
    ],
    content: `
🚀 Next.js Full Tutorial

(Beginner → Advanced)

1️⃣ Next.js kya hai?

Next.js ek React framework hai jo production-ready features deta hai out of the box.

React sirf UI library hai,
Next.js React ke upar ye add karta hai:

Routing

Server Side Rendering (SSR)

Static Site Generation (SSG)

API Routes

SEO optimization

👉 Simple words me:
React + extra superpowers = Next.js

2️⃣ Next.js kyun use karein?

SEO friendly

Fast performance

Full-stack support

Easy routing

Scalable architecture

Use cases:

Blogs

Dashboards

E-commerce

SaaS apps

Portfolios

3️⃣ Next.js versions (Important)
Old (Pages Router)
pages/

New (App Router – Recommended ✅)
app/


👉 Tum App Router use kar rahi ho — industry standard.

4️⃣ Create Next.js Project
npx create-next-app@latest my-app
cd my-app
npm run dev


Open:

http://localhost:3000

5️⃣ Folder Structure (App Router)
app/
 ├── layout.tsx
 ├── page.tsx
 ├── globals.css
 ├── api/
 │    └── route.ts
 └── dashboard/
      └── page.tsx

6️⃣ page.tsx (Routing)

Each folder = route

app/page.tsx        →  /
app/login/page.tsx  →  /login


Example:

export default function Home() {
  return <h1>Hello Next.js</h1>;
}

7️⃣ layout.tsx (Common UI)

Navbar, footer, sidebar yahan aata hai.

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

8️⃣ Client vs Server Components (VERY IMPORTANT)
Server Component (default)
export default function Page() {
  return <div>Server Component</div>;
}

Client Component
"use client";
import { useState } from "react";


👉 Hooks use karne ke liye "use client" mandatory.

9️⃣ Styling in Next.js

Options:

CSS Modules

Global CSS

Tailwind CSS ✅ (recommended)

Example:

<div className="text-xl font-bold">Hello</div>

🔟 Navigation (Link)
import Link from "next/link";

<Link href="/login">Login</Link>

1️⃣1️⃣ useRouter (Navigation)
"use client";
import { useRouter } from "next/navigation";

const router = useRouter();
router.push("/dashboard");

1️⃣2️⃣ Data Fetching (Server Side)
const data = await fetch("https://api.com/data");


By default:

Cached

Server side

Disable cache:

fetch(url, { cache: "no-store" });

1️⃣3️⃣ API Routes (Backend inside Next.js)
app/api/users/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ users: [] });
}


👉 Next.js = Full-stack framework.

1️⃣4️⃣ Environment Variables
.env.local

DATABASE_URL=xxxx
NEXT_PUBLIC_API_URL=xxxx


👉 NEXT_PUBLIC_ → frontend access.

1️⃣5️⃣ Authentication (Basic Idea)

Options:

NextAuth

Clerk

Firebase Auth

You already used Clerk 👌

1️⃣6️⃣ Middleware

Used for:

Auth protection

Redirects

Logging

middleware.ts

export function middleware(req) {
  // logic
}

1️⃣7️⃣ Dynamic Routes
app/blog/[slug]/page.tsx


URL:

/blog/react

export default function Page({ params }) {
  return <h1>{params.slug}</h1>;
}

1️⃣8️⃣ Loading & Error UI
loading.tsx
error.tsx


Automatic states:

Loading

Error

1️⃣9️⃣ SEO in Next.js
export const metadata = {
  title: "Home",
  description: "My app",
};


👉 Great SEO by default.

2️⃣0️⃣ Image Optimization
import Image from "next/image";

<Image src="/img.png" width={200} height={200} />


Auto:

Lazy loading

Compression

2️⃣1️⃣ Deployment (Vercel)
npm run build


Push to GitHub → Deploy on Vercel.

2️⃣2️⃣ Performance Features

Server Components

Code splitting

Image optimization

Caching

2️⃣3️⃣ Common Next.js Mistakes

❌ Forgetting "use client"
❌ Using hooks in server components
❌ Wrong folder structure
❌ Not handling loading state

2️⃣4️⃣ Next.js + MERN Stack

Example architecture:

Next.js (Frontend + API)
MongoDB
Auth (Clerk)
AWS / Vercel

2️⃣5️⃣ Interview Questions (Bonus)

Difference between React & Next.js?

What is SSR?

Client vs Server Components?

App Router vs Pages Router?

API routes?

2️⃣6️⃣ Learning Path (Recommended)

React basics

Next.js routing

Data fetching

Auth

Full-stack APIs

Deployment

2️⃣7️⃣ Summary

✔ Next.js = React + Backend
✔ SEO & performance friendly
✔ Production ready
✔ Best for modern web apps
`,
};