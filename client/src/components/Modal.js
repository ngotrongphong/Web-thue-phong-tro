import React, { memo } from "react";
import icons from "../utils/icons";

const { GrLinkPrevious } = icons;

const Modal = ({ setIsShowModal, content, name }) => {
  return (
    <div
      onClick={() => {
        setIsShowModal(false);
      }}
      className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-overlay-70"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsShowModal(true);
        }}
        className="w-2/5 h-[500px] bg-white rounded-md relative"
      >
        <div className="h-[45px] px-4 flex items-center border-b border-gray-200">
          <span
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsShowModal(false);
            }}
          >
            <GrLinkPrevious size={24} />
          </span>
        </div>
        <div className="flex flex-col p-4">
          {content?.map((item) => {
            return (
              <span
                key={item.code}
                className="flex items-center gap-2 py-2 border-b border-gray-200"
              >
                <input
                  type="radio"
                  name={name}
                  id={item.code}
                  value={item.code}
                />
                <label htmlFor={item.code}>{item.value}</label>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
