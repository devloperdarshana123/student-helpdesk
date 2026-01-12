import Image from "next/image";
import Link from "next/link";
import Features from "../components/Features";
import Support from "../components/Support";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HowItWorksPage from "../components/HowItWork";
export default function Home() {
  return (
    <>
    
    <div className="min-h-screen bg-gradient-to-br from-[#7ddad6] via-[#b8f1ef] to-[#eefdfc] flex items-center justify-center px-6">
      
      <div className="relative w-full max-w-7xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.12)] p-10">

  
        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 font-semibold">
              🎓 AI Powered Student Support
            </span>

            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Smart Helpdesk <br />
              <span className="text-emerald-500">For Students</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-md mb-8">
              An AI-driven student helpdesk platform that resolves queries related to 
              exams, fees, results, and academics — faster and smarter.
            </p>

            {/* SEARCH / QUERY INPUT */}
            <div className="flex items-center bg-white rounded-full shadow-lg p-2 max-w-md">
              <input
                type="text"
                placeholder="Ask your question here..."
                className="flex-1 px-4 py-2 outline-none text-sm"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition">
                ➜
              </button>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex gap-6 mt-10">
              <Link
                href="/auth/login"
                className="px-8 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-8 py-3 rounded-xl bg-white text-gray-900 font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-60"></div>

            <Image
              src="/hero.jpg"
              alt="Student Helpdesk Illustration"
              width={480}
              height={380}
              priority
            />
          </div>
        </section>
      </div>
    </div>
    {/* FEATURES SECTION */}
    <Features />

    <HowItWorksPage />
    {/* SUPPORT SECTION */}
    <Support />
    {/* CONTACT SECTION */}
    <Contact />

   

    </>
  );
}
