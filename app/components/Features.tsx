import Image from "next/image";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#fffdf9] py-28 px-6 flex justify-center"
    >
      <div className="w-full max-w-7xl">

        {/* TOP FEATURE INTRO */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-5xl font-extrabold text-emerald-900 mb-6 leading-tight">
              Smart Student <br />
              Support Excellence
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-md">
              We build AI-powered student helpdesk systems that resolve
              academic queries efficiently and confidently.
            </p>

            <div className="flex gap-4">
              <button className="bg-yellow-300 text-gray-900 px-6 py-3 font-semibold rounded-md">
                Free Consultation
              </button>
              <button className="bg-emerald-700 text-white px-6 py-3 font-semibold rounded-md">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="flex justify-center">
            <Image
              src="/feature.jpg"
              alt="Feature Illustration"
              width={420}
              height={380}
            />
          </div>
        </div>

        {/* PROCESS TITLE */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-wide text-gray-500 mb-4">
            TAKE THE STRESS OUT OF STUDENT QUERIES
          </p>
          <h3 className="text-4xl font-bold text-emerald-900">
            We’re there every step <br /> of the way
          </h3>
        </div>

        {/* 3 FEATURE STEPS */}
        <div className="grid md:grid-cols-3 gap-16 text-center mb-32">

          {/* STEP 1 */}
          <div className="text-center px-4">
            <Image
              src="/submit.jpg"
              alt="Submit Query"
              width={240}
              height={190}
              className="mx-auto mb-8"
            />
            <h4 className="text-2xl font-semibold text-emerald-900 mb-4">
              Submit Your Query
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Students submit academic queries related to exams, fees,
              results, or academics.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-4">
            <Image
              src="/AI.jpg"
              alt="AI Response"
              width={240}
              height={190}
              className="mx-auto mb-8"
            />
            <h4 className="text-2xl font-semibold text-emerald-900 mb-4">
              AI Resolution
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Our AI analyzes queries and provides instant, accurate
              responses in multiple languages.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-4">
            <Image
              src="/admin.jpg"
              alt="Admin Support"
              width={240}
              height={190}
              className="mx-auto mb-8"
            />
            <h4 className="text-2xl font-semibold text-emerald-900 mb-4">
              Admin Assistance
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Complex queries are escalated to admins for manual
              review and resolution.
            </p>
          </div>

        </div>

        {/* SOLUTION SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div>
            <Image
              src="/problem.jpg"
              alt="Solution"
              width={420}
              height={300}
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <p className="text-sm text-gray-400 mb-4">
              NO TEMPLATES HERE 🙂
            </p>
            <h3 className="text-4xl font-bold text-emerald-900 mb-6">
              Fully custom <br /> and student-focused
            </h3>
            <p className="text-gray-600 max-w-md">
              Every institution has unique requirements. Our helpdesk
              system is fully customizable and aligned with institutional
              workflows and branding.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
