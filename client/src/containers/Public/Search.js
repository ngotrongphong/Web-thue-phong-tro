import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, SearchItem } from "../../components";
import icons from "../../utils/icons";

const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;

const Search = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );

  const handleShowModal = (content) => {
    setIsShowModal(true);
    setContent(content);
    setName(name);
  };
  return (
    <>
      <div className="p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handleShowModal(categories, "category")}
          className="flex-1 cursor-pointer"
        >
          <SearchItem
            IconBefore={<MdOutlineHouseSiding />}
            fontWeight
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text="Phòng trọ, nhà trọ"
          />
        </span>

        <span
          onClick={() => handleShowModal(provinces, "province")}
          className="flex-1 cursor-pointer"
        >
          <SearchItem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text="Toàn quốc"
          />
        </span>

        <span
          onClick={() => handleShowModal(prices, "price")}
          className="flex-1 cursor-pointer"
        >
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text="Chọn giá"
          />
        </span>

        <span
          onClick={() => handleShowModal(areas, "area")}
          className="flex-1 cursor-pointer"
        >
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
            text="Chọn diện tích"
          />
        </span>

        <button
          type="button"
          className="outline-none py-2 px-4 flex-1 bg-secondary text-[13.3px] flex items-center justify-center gap-2 text-white font-medium rounded-md"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {isShowModal && (
        <Modal content={content} name={name} setIsShowModal={setIsShowModal} />
      )}
    </>
  );
};

export default Search;
