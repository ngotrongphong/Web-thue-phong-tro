import React, { memo } from "react";
import icons from "../utils/icons";

const { GrNext } = icons;

const ItemSidebar = ({ title, content, isDouble }) => {
  const formatContent = () => {
    const oddEl = content?.filter((item, index) => index % 2 !== 0);
    const evenEl = content?.filter((item, index) => index % 2 === 0);
    const formatContent = oddEl?.map((item, index) => {
      return {
        right: item,
        left: evenEl?.find((item2, index2) => index2 === index),
      };
    });
    return formatContent;
  };

  return (
    <div className="w-full p-4 bg-white rounded-xl">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      {!isDouble && (
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
      )}
      {isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length > 0 &&
            formatContent(content).map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex items-center justify-around">
                    <div className="flex items-center flex-1 gap-2 pb-1 border-b border-gray-200 border-dashed">
                      <GrNext size={10}></GrNext>
                      <p className="hover:text-[#febb02] cursor-pointer w-fit">
                        {item.left.value}
                      </p>
                    </div>
                    <div className="flex items-center flex-1 gap-2 pb-1 border-b border-gray-200 border-dashed">
                      <GrNext size={10}></GrNext>
                      <p className="hover:text-[#febb02] cursor-pointer w-fit">
                        {item.right.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default memo(ItemSidebar);
