import React, { memo } from "react";
import icons from "../utils/icons";

const { GrNext } = icons;

const ItemSidebar = ({ title, content }) => {
  return (
    <div className="w-full p-4 bg-white rounded-xl">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="flex flex-col gap-2">
        {content?.length > 0 &&
          content.map((item) => {
            return (
              <div
                key={item.code}
                className="flex items-center gap-2 pb-1 border-b border-gray-200 border-dashed "
              >
                <GrNext size={10}></GrNext>
                <p className="hover:text-[#febb02] cursor-pointer w-fit">
                  {item.value}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default memo(ItemSidebar);
