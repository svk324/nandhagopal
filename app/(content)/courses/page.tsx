"use client";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";

import StorePage from "@/app/(Store)/store/store";

export default () => {
  const { user } = useUser();
  return (
    <div>
      <SignedIn>
        <div className="min-h-screen w-full dark:bg-black bg-gray dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
          <main className="container mx-auto py-10">
            {/* Pass the full course object here */}
            <StorePage />
          </main>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};
