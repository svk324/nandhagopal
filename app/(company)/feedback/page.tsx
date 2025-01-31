"use client";
import Header from "./Header";
import FeedbackPage from "./feedBack";

export default () => {
  return (
    <div>
      <div className="bg-white dark:bg-black">
        <Header />
        <FeedbackPage />
      </div>
    </div>
  );
};
