import { useState, Children, isValidElement } from "react";

const ReadMore = ({ height, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className={`overflow-hidden ${isExpanded ? "" : height}`}>
        <div className="" dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
      {text?.length > 100 && (
        <button
          onClick={toggleReadMore}
          className="hover:text-blue-500 cursor-pointer focus:outline-none text-sm"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
