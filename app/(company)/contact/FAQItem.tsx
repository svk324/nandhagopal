import { useState, useEffect } from "react";

// Define the prop types for FAQItem
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// FAQItem component definition
const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        onClick={onClick}
      >
        <span className="font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? "transform rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 pr-4 transition-all duration-300 ease-in-out">
          <p className="text-gray-600 dark:text-zinc-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

// Define the type for the FAQ list
interface FAQ {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "How can I access the courses I purchased on SVLU?",
      answer:
        "Once your purchase is complete, you will receive a confirmation email along with a link to access your courses. You can also log into your SVLU account and visit the 'My Courses' section to start learning anytime, anywhere.",
    },
    {
      question:
        "What should I do if I have trouble accessing my course materials?",
      answer:
        "If you experience issues accessing your course materials, first ensure that you are logged into the correct account. If problems persist, reach out to our support team via the 'Help' section on our website, and we will assist you promptly.",
    },
    {
      question: "Can I download the course content for offline use?",
      answer:
        "Depending on the course format, you may have the option to download certain materials for offline use. For more details, please check the course description or contact our support team for further assistance.",
    },
    {
      question: "How can I update my account information on SVLU?",
      answer:
        "To update your account information, simply log in to your SVLU account and go to 'Account Settings.' Here, you can modify your personal details, change your password, or update your email address.",
    },
    {
      question: "What should I do if I forgot my SVLU account password?",
      answer:
        "If you’ve forgotten your password, click the 'Forgot Password' link on the login page. Follow the instructions to reset your password using the email address associated with your account.",
    },
    {
      question: "How can I contact SVLU customer support?",
      answer:
        "If you need assistance, you can contact our dedicated customer support team through the 'Help' section on our website. Alternatively, feel free to reach us via email at support@svlu.com, and we’ll be happy to assist you.",
    },
    {
      question:
        "Can I collaborate with SVLU for course development or partnerships?",
      answer:
        "SVLU is always open to collaboration opportunities. If you’re interested in developing courses or partnering with us, please reach out to our team via the 'Contact Us' section on our website or email us at partnerships@svlu.com.",
    },
    // Add more FAQ items as needed
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Randomly select an FAQ index to open on component mount
    const randomIndex = Math.floor(Math.random() * faqs.length);
    setOpenIndex(randomIndex);
  }, [faqs.length]);

  const handleClick = (index: number) => {
    // Toggle the clicked FAQ item, ensuring only one is open at a time
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-black">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            FAQ
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Frequently Asked Questions
          </p>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8 mb-8 md:mb-0">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
