import Image from "next/image";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home", icon: "/home.svg" },
  { href: "/courses", key: "courses", label: "courses", icon: "/book.svg" },
  // { href: "/courses", key: "Courses", label: "Courses", icon: "/book.svg" },
  { href: "/blogs", key: "blogs", label: "Blogs", icon: "/blog.svg" },
  { href: "/contact", key: "contact", label: "Help Center", icon: "/help.svg" },
  { href: "/about", key: "about", label: "About", icon: "/about.svg" },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/blogs", label: "Blogs" },
      { href: "/feedback", label: "Feedback" },
    ],
  },
  // {
  //   title: "Developers",
  //   links: [
  //     { href: "/docs", label: "Documentation" },
  //     { href: "/intern", label: "Intern Certificate" },
  //     { href: "/changelog", label: "Changelog" },
  //     { href: "/contact", label: "Contact us" },
  //   ],
  // },
  {
    title: "Legal",
    links: [
      { href: "/terms-and-conditions", label: "Terms and Conditions" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/refund-policy", label: "Refund Policy" },
    ],
  },
  // {
  //   title: "Product",
  //   links: [
  //     { href: "/courses", label: "Store" },
  //     { href: "/content", label: "Content" },
  //      { href: "/gate", label: "Gate Materials" },
  //      { href: "/exampapers", label: "Exam Papers" },
  //   ],
  // },
];
