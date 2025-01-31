"use client";

import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import { useTheme } from "./components/ThemeContext";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Lato = localFont({
  src: "./fonts/lato.ttf",
  variable: "--font-Lato",
  weight: "100 200 300 400 500 600 700 800 900",
});

const LAUNCH_DATE = new Date("2024-10-29T19:17:00");
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
          {isLaunched && <NavigationBar />}
          <main className={`${Lato.variable} antialiased flex-grow font-Lato`}>
            {isLaunched ? (
              children
            ) : (
              <div className="text-center">Site is not launched yet</div>
            )}
          </main>
          {isLaunched && <Footer />}
        </body>
      </html>
    </ThemeProvider>
  );
}
