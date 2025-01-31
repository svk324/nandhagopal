export const metadata = {
  title: "Blogs & News - SVLU",
  description:
    "Stay updated with the latest news, career opportunities, and announcements from SVLU. Explore job openings, internships, and learn how you can be part of our innovative team dedicated to enhancing education through high-quality courses and resources.",
  keywords:
    "SVLU careers, job openings, internships, career opportunities, SVLU jobs, employment, intern positions, study materials careers, education jobs",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="bg-white dark:bg-black">{children}</section>;
}
