import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white">
      
      <div className="shadow-xl rounded-2xl p-4 bg-white">
        <SignIn
          redirectUrl="/chat"
          afterSignInUrl="/chat"
        />
      </div>

    </div>
  );
}
