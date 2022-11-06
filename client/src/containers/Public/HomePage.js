import React from "react";
import { text } from "../../utils/constant";
import { Province } from "../../components";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full gap-3 border border-red-500">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESC}</p>
      </div>
      <Province></Province>
    </div>
  );
};

export default HomePage;
