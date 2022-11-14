import React, { memo, useState } from "react";
import icons from "../utils/icons";
import { useNavigate, Link } from "react-router-dom";
import { formatVietnameseToString } from "../utils/Common/formatVietnameseToString";

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const indexs = [0, 1, 2, 3];

const Item = ({
  images,
  user,
  title,
  star,
  description,
  attributes,
  address,
  id,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const navigate = useNavigate();
  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++)
      stars.push(
        <GrStar className="star-item" size={18} color="#febb02"></GrStar>
      );
    return stars;
  };
  return (
    <div className="flex w-full py-4 border-t border-orange-600">
      <Link
        to={`chi-tiet/${formatVietnameseToString(title)}/${id}`}
        className="w-2/5 flex flex-wrap items-center gap-[2px] relative cursor-pointer"
      >
        {images.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i, index) => {
              return (
                <img
                  key={index}
                  className="w-[140px] h-[120px] object-cover"
                  src={i}
                  alt="preview"
                />
              );
            })}

        <span className="absolute px-2 text-white rounded-md bg-overlay-70 bottom-4 left-1">
          {`${images.length} ảnh`}
        </span>
        <span
          className="absolute text-white bottom-1 right-5"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? (
            <RiHeartFill size={26} color="red"></RiHeartFill>
          ) : (
            <RiHeartLine size={26}></RiHeartLine>
          )}
        </span>
      </Link>

      <div className="w-3/5">
        <div className="flex justify-between w-full gap-4">
          <div className="font-medium text-red-600 uppercase">
            {handleStar(+star).length > 0 &&
              handleStar(+star).map((star, number) => {
                return <span key={number}>{star}</span>;
              })}
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill color="orange" size={24}></BsBookmarkStarFill>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 my-2">
          <span className="overflow-hidden font-bold text-green-600 flex-3 whitespace-nowrap text-ellipsis">
            {attributes?.price}
          </span>
          <span className="flex-1">{attributes.acreage}</span>
          <span className="flex-3">{`${
            address.split(",")[address.split(",").length - 2]
          },${address.split(",")[address.split(",").length - 1]}`}</span>
        </div>
        <p className="text-gray-500 w-full h-[50px] whitespace-nowrap text-ellipsis overflow-hidden">
          {description}
        </p>
        <div className="flex items-center justify-between my-5">
          <div className="flex items-center">
            <img
              className="w-[30px] h-[30px] rounded-full object-cover"
              src="https://previews.123rf.com/images/kritchanut/kritchanut1407/kritchanut140700074/29708877-gesch%C3%A4ftsmann-silhouette-avatar-profilbild.jpg"
              alt=""
            />
            <p className="ml-1">{user?.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-1 text-white bg-blue-700 rounded-xl"
            >
              {`Gọi ${user?.phone}`}
            </button>
            <button
              type="button"
              className="p-1 text-blue-700 border border-blue-700 rounded-xl"
            >
              Nhắn zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
