// ScrollText.tsx (Updated for SVLU)
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

// Define types for content
interface ContentItem {
  title: string;
  description: string;
  content: React.ReactNode;
}

const content: ContentItem[] = [
  {
    title: "World-Class Courses",
    description:
      "SVLU offers a wide variety of world-class courses, designed and taught by expert instructors. Our courses are crafted to give you the best learning experience possible, empowering you to succeed in your educational journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        World-Class Courses
      </div>
    ),
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from the best! Our instructors are industry experts with years of practical experience. They are dedicated to providing you with valuable knowledge and real-world insights that will help you succeed.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/instructor-portrait.jpg" // Replace with actual instructor images
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Instructor Portrait"
          placeholder="blur-sm"
          blurDataURL="/placeholder.jpg"
        />
      </div>
    ),
  },
  {
    title: "Interactive Learning",
    description:
      "SVLU’s platform provides interactive tools to enhance your learning experience. From live quizzes and forums to one-on-one mentoring, we ensure that every student receives personalized attention and practical learning.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Interactive Learning Tools
      </div>
    ),
  },
  {
    title: "Flexible Learning Paths",
    description:
      "Whether you’re a beginner or an advanced learner, SVLU offers flexible learning paths tailored to your needs. Choose the course pace, track your progress, and take control of your education from anywhere in the world.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Flexible Learning Paths
      </div>
    ),
  },
  {
    title: "Certification & Recognition",
    description:
      "Upon completing courses, receive official certifications that you can showcase to employers or institutions. Our courses are recognized globally and designed to give you an edge in your career.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white">
        Certification & Recognition
      </div>
    ),
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is available round-the-clock to assist you with any questions or technical difficulties you might encounter. We’re here to help you succeed every step of the way.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
        24/7 Student Support
      </div>
    ),
  },
];

export default function ScrollText() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <StickyScroll content={content} />
    </div>
  );
}
