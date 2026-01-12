import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Getting Started", icon: "🎓" },
  { name: "Account Settings", icon: "⚙️" },
  { name: "Apps & Platform", icon: "📱" },
  { name: "Branding", icon: "🎨" },
  { name: "General", icon: "📚" },
  { name: "Guides", icon: "🧭" },
  { name: "Notifications", icon: "🔔" },
  { name: "Plans", icon: "💳" },
];

export default function SupportPage() {
  return (
    <section id="support" className="bg-gradient-to-b from-[#f0fdfa] to-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-emerald-600 font-semibold mb-2">We're here to help</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Support & Resources</h2>
            <p className="text-gray-600 max-w-xl mb-6">
              Find guides, tutorials, and answers to common student questions — from exams to fees and more.
            </p>

            <div className="flex w-full max-w-md bg-white rounded-full shadow-sm overflow-hidden border">
              <input
                type="text"
                placeholder="Search help articles, e.g. fee payment"
                className="flex-1 px-5 py-3 text-sm outline-none"
              />
              <button className="bg-emerald-500 text-white px-6 text-sm font-medium hover:bg-emerald-600 transition">
                Search
              </button>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow text-sm font-medium hover:shadow-md"
              >
                ✉️ Contact Support
              </Link>
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg shadow text-sm font-medium hover:bg-emerald-700"
              >
                ➜ Create Account
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -right-8 -top-10 w-36 h-36 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>
            <Image src="/support.jpg" alt="Support" width={520} height={360} className="rounded-xl shadow-lg" />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular categories</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categories.map((c) => (
              <div key={c.name} className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-50 text-2xl mb-3">
                  <span>{c.icon}</span>
                </div>
                <div className="text-sm font-medium text-gray-800">{c.name}</div>
                <div className="text-xs text-gray-500 mt-2">Browse articles</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-white border rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Still need help?</h4>
            <p className="text-sm text-gray-600">Reach out to our support team or explore detailed guides for step-by-step help.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/chat" className="px-4 py-2 bg-white rounded-lg shadow text-sm font-medium hover:shadow-md">Start Chat</Link>
            <Link href="/contact" className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow text-sm font-medium hover:bg-emerald-700">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
