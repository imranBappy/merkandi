"use client";
import { useEffect, useState } from "react";

function Tags({ productState }) {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [product, setProduct] = productState;

  useEffect(() => {
    setTags(product.tags);
  }, [product]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddTag = () => {
    if (inputValue.trim() !== "" && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setProduct({ ...product, tags: [...tags, inputValue.trim()] });
      setInputValue("");
    }
  };

  const handleRemoveTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    setProduct({ ...product, tags: newTags });
  };

  return (
    <div className="w-full bg-white  mb-4">
      <div className="box__title  px-3 py-2">
        <h3 className="text-sm text-grey-darker text-black font-medium">
          Tags
        </h3>
      </div>
      <div className="relative   p-2">
        <div className="gap-2 mb-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 mb-2 mr-2 inline-block">
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="ml-1 text-red-500"
              >
                X
              </button>
            </span>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={handleInput}
            placeholder="Add tags"
            className="border p-2 w-full outline-0"
          />
          <button
            onClick={handleAddTag}
            className="ml-2 bg-blue-500 text-white px-4 py-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tags;
