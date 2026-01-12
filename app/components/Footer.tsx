import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-emerald-400 font-bold text-lg">Student Helpdesk</div>
          <p className="text-sm text-gray-300 mt-3 max-w-xs">
            AI-powered student support — fast answers for exams, fees, results and academics.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-100 mb-3">Company</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-100 mb-3">Resources</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><Link href="/support" className="hover:underline">Help Center</Link></li>
            <li><Link href="/docs" className="hover:underline">Documentation</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-100 mb-3">Contact</h4>
          <p className="text-sm text-gray-300">support@studenthelpdesk.example</p>
          <p className="text-sm text-gray-300 mt-2">+1 (555) 123-4567</p>

          <div className="mt-4 flex items-center gap-3">
            <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">🌐</a>
            <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">🧑‍💻</a>
            <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">💬</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Student Helpdesk. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Built with ♥ for students</div>
        </div>
      </div>
    </footer>
  );
}
