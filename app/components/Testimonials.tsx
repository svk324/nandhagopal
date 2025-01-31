// CardStackDemo.tsx
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";
import { CARDS } from "./Data/testimonials"; // Assuming CARDS hold testimonial data

export function CardStackDemo() {
  return (
    <div className="min-h-[40rem] flex items-center justify-center w-full px-4 py-8 sm:py-12 bg-white dark:bg-zinc-950">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 dark:text-zinc-200">
            What Our Students Say
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed pb-10">
            Discover how SVLU has transformed the learning journey for students
            across the globe. Our platform is more than just courses – it's a
            community that nurtures personal growth, professional development,
            and academic success.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <CardStack items={CARDS} />
        </div>
      </div>
    </div>
  );
}
