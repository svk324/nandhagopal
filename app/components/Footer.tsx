"use client";
import React from "react";
import Image from "next/image";
import { FOOTER_LINKS } from "./Data/data"; // Adjust the import path as necessary
import { useTheme } from "./ThemeContext"; // Adjust the import path as needed
import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const { isDarkMode } = useTheme(); // Use the theme context

  return (
    <footer className="w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.1] relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <Image
              src={isDarkMode ? "/logo.svg" : "/logo-w.svg"}
              width={110}
              height={50}
              alt="Penbyt-logo"
            />
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-left">
              Empowering minds and shaping futures through innovative and
              accessible courses
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://x.com/penbyt"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white"
              >
                <Image
                  src="/twitter-x-line.svg"
                  width={20}
                  height={20}
                  alt="Twitter"
                  className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                />
              </a>
              <a
                href="https://github.com/Penbyt"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white"
              >
                <Image
                  src="/github-fill.svg"
                  width={20}
                  height={20}
                  alt="GitHub"
                  className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                />
              </a>
              <a
                href="https://discord.gg/xB6SXGVD"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white"
              >
                <Image
                  src="/discord.svg"
                  width={20}
                  height={20}
                  alt="Discord"
                  className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/penbyt/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white"
              >
                <Image
                  src="/linkedin-box-fill.svg"
                  width={20}
                  height={20}
                  alt="LinkedIn"
                  className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                />
              </a>
              <a
                href="https://instagram.com/penbyt"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white"
              >
                <Image
                  src="/instagram.svg"
                  width={20}
                  height={20}
                  alt="Twitter"
                  className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                />
              </a>
              <a
                href="https://www.youtube.com/@TodaysTechTelugu"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white"
              >
                <Image
                  src="/youtube-fill.svg"
                  width={20}
                  height={20}
                  alt="YouTube"
                  className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="mb-8 lg:mb-0">
                <h3 className="text-gray-900 dark:text-gray-100 font-semibold">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex justify-between text-center lg:text-left">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            &copy; {currentYear} SVLU. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Design & Developed by{" "}
            <strong className="font-semibold text-black dark:text-white">
              <Link href="https://alwayssvk.vercel.app">S.VIJAY KUMAR</Link>
            </strong>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
