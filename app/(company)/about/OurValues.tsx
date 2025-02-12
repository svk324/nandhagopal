import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo() {
  return (
    <div className="py-20 lg:py-40 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center pb-8">
        <h2 className="text-base font-semibold tracking-wide uppercase text-purple-600">
          Our Values at SVLU
        </h2>
        <p className="mt-1 text-4xl font-extrabold dark:text-white text-zinc-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Committed to Transforming Education
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl dark:text-white text-zinc-500">
          Empowering learners with knowledge, resources, and support for
          success.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-linear-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Be World-Class",
    description:
      "Strive for excellence in all your educational endeavors through high-quality resources and expert-led courses.",
  },
  {
    title: "Share Knowledge",
    description:
      "Fostering collaboration and knowledge exchange among learners and instructors for collective growth.",
  },
  {
    title: "Lifelong Learning",
    description:
      "Encouraging a continuous pursuit of knowledge and skills for a fulfilling and evolving career.",
  },
  {
    title: "Be Supportive",
    description:
      "Create a nurturing environment where students feel motivated, supported, and ready to take on new challenges.",
  },
  {
    title: "Take Responsibility",
    description:
      "Empower learners to own their educational journeys and remain committed to achieving their goals.",
  },
  {
    title: "Enjoy Downtime",
    description:
      "Balance your learning with moments of relaxation and recreation to boost productivity and well-being.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-linear-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
