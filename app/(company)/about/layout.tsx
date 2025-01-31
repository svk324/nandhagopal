export const metadata = {
  title: "About - SVLU",
  description:
    "Learn more about SVLU, your trusted partner in online learning. Discover our mission, values, and the dedicated team behind our commitment to enhancing education through high-quality courses and resources for learners and interns alike.",
  keywords:
    "about SVLU, company information, mission, values, team, online learning, educational resources, internship support, quality education",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
