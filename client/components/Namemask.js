import useAuthCheck from "@/hooks/useAuthCheck";
import React from "react";
import { useSelector } from "react-redux";

// Helper function to mask a string with asterisks except for the first character
const maskString = (str) => {
  if (!str || str.length === 0) return "";

  let words = str.split(" ");
  let maskedWords = words.map((word) => {
    if (word.length <= 1) return word;

    return word[0] + "*".repeat(word.length - 1);
  });

  return maskedWords.join(" ");
};

const Namemask = ({ condition, title }) => {
  useAuthCheck();
  const { isAuthintication } = useSelector((state) => state.auth);
  if (isAuthintication) {
    return <div>{title}</div>;
  } else {
    return <div>{maskString(title)}</div>;
  }
};

export default Namemask;
