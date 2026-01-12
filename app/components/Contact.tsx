

export default function ContactPage() {
  return (
    <section id = "contact"  className="bg-gradient-to-b from-white to-[#f7fdfa] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm text-emerald-600 font-semibold">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">We’d love to hear from you</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">Questions about exams, fees, results or anything else? Send us a message or start a chat — we respond quickly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Contact info */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get in touch</h3>
              <p className="text-sm text-gray-600">Reach our support team via email, phone or live chat.</p>

              <div className="mt-6 grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl">✉️</div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-xs text-gray-500">support@studenthelpdesk.example</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl">📞</div>
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-xs text-gray-500">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl">🕒</div>
                  <div>
                    <div className="text-sm font-medium">Hours</div>
                    <div className="text-xs text-gray-500">Mon — Fri, 9:00 — 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-emerald-50 to-white rounded-2xl border border-emerald-100">
              <h4 className="font-semibold text-gray-900">Quick Links</h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a className="text-sm text-emerald-600 hover:underline">Help Center</a>
                <a className="text-sm text-emerald-600 hover:underline">FAQ</a>
                <a className="text-sm text-emerald-600 hover:underline">Billing</a>
                <a className="text-sm text-emerald-600 hover:underline">Privacy</a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            <div className="relative bg-white rounded-3xl shadow-lg p-6 md:p-8">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Send us a message</h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Your name" />
                  <input className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Email address" />
                </div>

                <input className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Subject" />

                <textarea className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200 h-32" placeholder="How can we help?"></textarea>

                <div className="flex items-center justify-between gap-4">
                  <button type="submit" className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700">Send Message</button>
                  <button type="button" className="px-4 py-2 bg-white border rounded-lg text-sm">Start Live Chat</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
