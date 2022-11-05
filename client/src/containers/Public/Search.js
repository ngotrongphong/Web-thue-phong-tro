import React from "react";
import { SearchItem } from "../../components";
import icons from "../../utils/icons";

const {
  BsChevronRight,
  MdOutlineHouseSiding,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  FiSearch,
} = icons;

const Search = () => {
  return (
    <div className=" p-[10px] bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
      <SearchItem
        iconBefore={<MdOutlineHouseSiding></MdOutlineHouseSiding>}
        text="Phòng trọ, nhà trọ"
        iconAfter={<BsChevronRight></BsChevronRight>}
      ></SearchItem>
      <SearchItem
        iconBefore={<HiOutlineLocationMarker></HiOutlineLocationMarker>}
        iconAfter={<BsChevronRight></BsChevronRight>}
        text="Toàn quốc"
      ></SearchItem>
      <SearchItem
        iconBefore={<TbReportMoney></TbReportMoney>}
        iconAfter={<BsChevronRight></BsChevronRight>}
        text="Chọn giá"
      ></SearchItem>
      <SearchItem
        iconBefore={<RiCrop2Line></RiCrop2Line>}
        iconAfter={<BsChevronRight></BsChevronRight>}
        text="Chọn diện tích"
      ></SearchItem>
      <button
        type="button"
        className="flex items-center justify-center gap-2 text-white font-medium w-full px-4 py-2 text-[13.3px] outline-none bg-secondary rounded-md"
      >
        <FiSearch></FiSearch>
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;
