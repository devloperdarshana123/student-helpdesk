import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Ask a Question",
    desc: "Type your query or upload context — the assistant understands your intent.",
    icon: "💬",
  },
  {
    title: "Instant Answers",
    desc: "AI quickly provides relevant answers, links to guides, and next steps.",
    icon: "⚡",
  },
  {
    title: "Escalation",
    desc: "If needed, issues are routed to admins with full context for manual help.",
    icon: "🚀",
  },
];

export default function HowItWorksPage() {
  return (
    <section   id = "how-it-works"className="bg-gradient-to-b from-white to-[#f7fff9] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-emerald-600 mb-2">How it works</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Smart support in three simple steps</h1>
            <p className="text-gray-600 mb-6 max-w-xl">Student Helpdesk combines AI and human workflows to deliver fast, accurate answers — reducing wait time and improving outcomes for students and staff.</p>

            <div className="flex gap-3">
              <Link href="/register" className="px-5 py-3 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700">Get Started</Link>
              <Link href="/#support" className="px-5 py-3 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 transition text-sm">View Support</Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-12 -top-8 w-40 h-40 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>
            <Image src="/download.jpg" alt="How it works" width={520} height={360} className="rounded-2xl shadow-lg" />
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-emerald-600 mb-3">Built for real student workflows</h3>
          <p className="text-gray-600">Answers include citations, links to guides, and suggested next steps. Administrators can review escalations with full context including conversation history and attachments.</p>
        </div>
      </div>
    </section>
  );
}
