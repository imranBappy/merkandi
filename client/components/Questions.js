// components/Questions.js
import { useState } from 'react';

const Question = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center p-2 cursor-pointer"
        onClick={onClick}
      >
        <h2 className="text-xl text-mm font-semibold">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-gray-500 ${isOpen ? 'transform' : 'transform rotate-[270deg]'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && <div className="p-2">{content}</div>}
    </div>
  );
};

const Questions = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleQuestionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <Question
          key={index}
          {...item}
          isOpen={index === openIndex}
          onClick={() => handleQuestionClick(index)}
        />
      ))}
    </div>
  );
};

export default Questions;
