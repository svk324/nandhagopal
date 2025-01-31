export const metadata = {
  title: "Feedback - Sri Venkateshwara Learning Universe",
  description:
    "We value your thoughts and input! Share your feedback, contact SVLU for support, inquiries, or collaboration opportunities. Our team is here to help you navigate our vast library of online courses and resources for your learning journey.",
  keywords:
    "feedback SVLU, contact SVLU, learning support, online courses, educational resources, collaboration opportunities, feedback form, course inquiries, SVLU support",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
