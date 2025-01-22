"use client";
const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-900 pt-10">
      {" "}
      {/* Root background changes based on theme */}
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24 dark:bg-opacity-10 dark:bg-[#1f1f1f]">
        {" "}
        {/* Section background adjusts */}
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                {" "}
                {/* Text color in light/dark mode */}A social media for learners
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl dark:text-white">
                {" "}
                {/* Heading text color */}
                Connect & learn from the experts
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl dark:text-gray-300">
                {" "}
                {/* Body text color */}
                Grow your career fast with the right mentor.
              </p>

              <a
                href="#"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400 dark:text-black dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:bg-yellow-600"
                role="button"
              >
                Join for free
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

              <p className="mt-5 text-gray-600 dark:text-gray-400">
                {" "}
                {/* Text color for "Already joined us?" */}
                Already joined us?{" "}
                <a
                  href="#"
                  title=""
                  className="text-black transition-all duration-200 hover:underline dark:text-white"
                >
                  Log in
                </a>
              </p>
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
