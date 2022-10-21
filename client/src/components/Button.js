import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Button = ({ text, textColor, bgColor, icAfter }) => {
  return (
    <button
      type="button"
      className={`p-2 ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1 font-medium`}
    >
      <span>{text}</span>
      <span>{icAfter && <AiOutlinePlusCircle></AiOutlinePlusCircle>}</span>
    </button>
  );
};

export default Button;
