import React, { memo } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Button = ({ text, textColor, bgColor, icAfter, onClick }) => {
  console.log("re-render");
  return (
    <button
      type="button"
      className={`p-2 ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1 font-medium`}
      onClick={onClick}
    >
      <span>{text}</span>
      <span>{icAfter && <AiOutlinePlusCircle></AiOutlinePlusCircle>}</span>
    </button>
  );
};

export default memo(Button);
