import React from "react";
import { text } from "../../utils/constant.js";
import { Search } from "./index.js";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full gap-3 border border-red-500">
      <Search></Search>
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-sm text-gray-700">{text.HOME_DESC}</p>
      </div>
    </div>
  );
};

export default HomePage;
