import { Lato } from "next/font/google";

const roboto = Lato({
  weight: ["100", "300", "400", "700", "900"], // Add the different weights you need
  subsets: ["latin"],
});

export const metadata = {
  title: "Courses - SVLU",
  description:
    "SVLU’s store offers a wide selection of individual courses, curated bundles, and essential educational software. Explore our collection of up-to-date content designed to enhance your learning experience and streamline the internship verification process. Whether you're seeking specialized courses, all-in-one study bundles, or software tools tailored for interns, SVLU provides a user-friendly platform to support your educational journey.",
  keywords:
    "internship resources, study courses, educational bundles, software for interns, SVLU store, learning materials, internship verification tools, student resources, comprehensive study guides",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
