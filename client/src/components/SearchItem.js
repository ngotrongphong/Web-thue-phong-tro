import React, { memo } from "react";

const SearchItem = ({ iconBefore, iconAfter, text }) => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 text-[13.3px] text-gray-400 bg-white rounded-md">
      <div className="flex items-center w-full gap-1">
        {iconBefore}
        <span className="w-full ">{text}</span>
      </div>
      {iconAfter}
    </div>
  );
};

export default memo(SearchItem);
