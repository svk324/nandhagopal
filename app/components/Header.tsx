"use client";
const Header = () => {
  return (
    <div className="bg-white dark:bg-black pt-10">
      {/* Root background adjusts based on theme */}
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24 dark:bg-opacity-10 dark:bg-black">
        {/* Section background for smooth contrast */}
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="mt-8 text-base font-medium tracking-wider text-blue-600 dark:text-blue-400">
                {/* Text color in both light/dark mode */}Your Gateway to
                Learning Excellence
              </p>
              <h1 className="mt-1 text-4xl font-bold text-black lg:mt-1 sm:text-6xl xl:text-8xl dark:text-white">
                {/* Headline emphasizing platform's value proposition */}
                Connect, Learn, and Grow with Expert Guidance
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl dark:text-zinc-300">
                {/* Body text emphasizing career growth */}
                Accelerate your career with personalized mentorship and
                high-quality courses.
              </p>

              <a
                href="/courses"
                title="Explore Courses"
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400 dark:text-black dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:bg-yellow-600"
                role="button"
              >
                Start Your Journey
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
