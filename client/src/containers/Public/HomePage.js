import React, { useEffect } from "react";
import { text } from "../../utils/constant";
import { Province, ItemSidebar, RelatedPost } from "../../components";
import { List, Pagination } from "./index";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const HomePage = () => {
  const { categories, prices, areas } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);
  return (
    <div className="flex flex-col w-full gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESC}</p>
      </div>
      <Province></Province>
      <div className="flex w-full gap-4">
        <div className="w-[70%]">
          <List></List>
          <Pagination></Pagination>
        </div>
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSidebar
            content={categories}
            title="Danh sách cho thuê"
          ></ItemSidebar>
          <ItemSidebar
            isDouble={true}
            content={prices}
            type="priceCode"
            title="Xem theo giá"
          ></ItemSidebar>
          <ItemSidebar
            isDouble={true}
            content={areas}
            type="areaCode"
            title="Xem theo diện tích"
          ></ItemSidebar>
          <RelatedPost></RelatedPost>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
