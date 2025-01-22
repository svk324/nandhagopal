"use client";

import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import { useTheme } from "./components/ThemeContext";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";
import FloatingButton from "./components/FloatingButton";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { usePathname, useRouter } from "next/navigation";
import { BackgroundLines } from "./components/ui/background-lines";

const Lato = localFont({
  src: "./fonts/lato.ttf",
  variable: "--font-Lato",
  weight: "100 200 300 400 500 600 700 800 900",
});

const LAUNCH_DATE = new Date("2024-10-29T19:17:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-white dark:bg-gray-800 bg-opacity-10 dark:bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
    <div className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
      {value.toString().padStart(2, "0")}
    </div>
    <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2">
      {label}
    </div>
  </div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +LAUNCH_DATE - +new Date();
      if (difference <= 0) {
        return null;
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <BackgroundLines className="flex items-center justify-center min-h-screen w-full flex-col px-4">
      <div className="flex flex-col md:flex-row items-center justify-center relative z-20 text-center">
        <img
          src="/logo.png"
          alt="Coming Soon"
          className="w-20 md:w-19 lg:w-22 mb-0 md:mb-0 md:mr-4"
        />
        <h2 className="text-4xl md:text-6xl font-bold italic bg-clip-text bg-gradient-to-b from-black to-neutral-600 dark:from-neutral-600 dark:to-white lg:text-7xl py-2 md:py-10 ">
          Coming very soon
        </h2>
      </div>
      <div className="text-center p-0">
        <div className="flex gap-4 md:gap-8 justify-center">
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
        <p className="mt-8 max-w-xl mx-auto font-medium md:text-lg bg-clip-text bg-gradient-to-b from-purple-800 to-orange-600">
          Live on {format(LAUNCH_DATE, "MMMM do, yyyy")} at 09:00 AM
        </p>
      </div>
    </BackgroundLines>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLaunched, setIsLaunched] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkLaunch = () => {
      const isLaunchTime = Date.now() >= LAUNCH_DATE.getTime();
      setIsLaunched(isLaunchTime);
      if (!isLaunchTime && pathname !== "/") {
        router.push("/");
      }
    };

    checkLaunch();
    const timer = setInterval(checkLaunch, 1000);
    return () => clearInterval(timer);
  }, [pathname, router]);

  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <ClerkProvider>
            {isLaunched && <NavigationBar />}
            <main
              className={`${Lato.variable} antialiased flex-grow font-Lato`}
            >
              {isLaunched ? children : <CountdownTimer />}
            </main>
            {isLaunched && <Footer />}
            {/* {isLaunched && <FloatingButton />} */}
          </ClerkProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
