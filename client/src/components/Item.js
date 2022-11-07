import React, { memo } from "react";
import icons from "../utils/icons";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/10/23/z3822293383620-350e635be1af3f2614137f7d368a22b0_1666506996.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/10/23/z3822293370794-383b8cc7099821254aa82b899ac1f559_1666506995.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/10/23/z3822293375053-631025c76fa5a34062645617208e35de_1666506995.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/10/23/z3822293377433-7feeb9b4d8cfa1993fc458072f77a192_1666506995.jpg",
];

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Item = () => {
  return (
    <div className="flex w-full p-4 border-t border-orange-600">
      <div className="w-2/5 flex flex-wrap items-center gap-[2px]">
        <img
          className="w-[140px] h-[120px] object-cover"
          src={images[0]}
          alt=""
        />
        <img
          className="w-[140px] h-[120px] object-cover"
          src={images[1]}
          alt=""
        />
        <img
          className="w-[140px] h-[120px] object-cover"
          src={images[2]}
          alt=""
        />
        <img
          className="w-[140px] h-[120px] object-cover"
          src={images[3]}
          alt=""
        />
      </div>

      <div className="w-3/5">
        <div className="flex justify-between w-full gap-4">
          <div className="font-medium text-red-600 uppercase">
            <GrStar className="star-item" size={18} color="#febb02"></GrStar>
            <GrStar className="star-item" size={18} color="#febb02"></GrStar>
            <GrStar className="star-item" size={18} color="#febb02"></GrStar>
            <GrStar className="star-item" size={18} color="#febb02"></GrStar>
            <GrStar className="star-item" size={18} color="#febb02"></GrStar>
            Phòng mới 100% full nội thất 25m2 có ban công view landmark 81
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill color="orange" size={24}></BsBookmarkStarFill>
          </div>
        </div>
        <div className="flex items-center justify-between my-2">
          <span className="font-bold text-green-600">3.7 triệu/tháng</span>
          <span>25m²</span>
          <span>Quận Bình Thạnh, Hồ Chí Minh</span>
        </div>
        <p className="text-gray-500">
          KHAI TRƯƠNG CHDV siêu thoáng VIEW LANDMARK 81 Sát trường ĐH Hutech ,
          UEF, VL Cơ sở 3 ,… Giá chỉ từ : 5.000.000 VNĐ - 6.500.000 VNĐ ( ban
          công, cửa sổ ) Full nội…
        </p>
        <div className="flex items-center justify-between my-5">
          <div className="flex items-center">
            <img
              className="w-[30px] h-[30px] rounded-full object-cover"
              src="https://previews.123rf.com/images/kritchanut/kritchanut1407/kritchanut140700074/29708877-gesch%C3%A4ftsmann-silhouette-avatar-profilbild.jpg"
              alt=""
            />
            <p className="ml-1">Trọng Phong</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-1 text-white bg-blue-700 rounded-xl"
            >
              Gọi 0123456789
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
