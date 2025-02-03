"use client";

import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import { useTheme } from "./components/ThemeContext";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";

const Lato = localFont({
  src: "./fonts/lato.ttf",
  variable: "--font-Lato",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <NavigationBar />
          <main className={`${Lato.variable} antialiased grow font-Lato`}>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
