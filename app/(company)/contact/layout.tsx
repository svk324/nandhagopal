export const metadata = {
  title: "Contact - SVLU",
  description:
    "Get in touch with SVLU for inquiries, support, or collaboration opportunities. Our team is here to assist you with everything related to our courses, resources, and services for learners and interns. Reach out today to explore how we can support your educational journey.",
  keywords:
    "contact SVLU, contact us, support, collaboration, online courses, internship resources, educational support, SVLU contact",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
