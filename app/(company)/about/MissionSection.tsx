import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="mx-auto px-4 py-16 dark:bg-zinc-950 bg-white dark:text-white text-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Mission at SVLU
          </h2>
          <p className="text-lg mb-6 dark:text-zinc-400 text-zinc-600">
            At <strong>Sri Venkateshwara Learning Universe (SVLU)</strong>, our
            mission is to deliver high-quality, comprehensive online learning
            experiences to students across the globe, helping them achieve both
            academic excellence and personal growth.
          </p>
          <p className="text-lg mb-6 dark:text-zinc-400 text-zinc-600">
            We are committed to the transformative power of education,
            constantly striving to create an environment that supports and
            nurtures learners at every stage of their educational journey.
          </p>
          <p className="text-lg dark:text-zinc-400 text-zinc-600">
            Join us as we work to make education not just accessible, but also
            enjoyable and impactful for everyone. Together, we can shape the
            future of learning.
          </p>
        </div>
        <div className="flex flex-col justify-center lg:justify-end space-y-4 lg:items-end">
          <div>
            <h3 className="text-4xl font-bold">15K+</h3>
            <p className="text-lg dark:text-zinc-400 text-zinc-600">
              Courses and Learning Resources
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="text-lg dark:text-zinc-400 text-zinc-600">
              Students Empowered Globally
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="text-lg dark:text-zinc-400 text-zinc-600">
              New Users Joining Annually
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
