import Link from "next/link";
import React from "react";
const FloatingButton: React.FC = () => {
  return (
    <button
      className="fixed bottom-4 right-4 p-4 rounded-full  overflow-hidden group flex items-center justify-center"
      aria-label="Help"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500  to-purple-500 animate-rotate" />
        <Link href="https://penbytgpt.vercel.app">
          <img
            src="/Ai.svg"
            alt="Icon"
            width={5}
            height={5}
            className="relative w-8 h-8 z-10 invert"
          />
        </Link>
      </div>
    </button>
  );
};

export default FloatingButton;
