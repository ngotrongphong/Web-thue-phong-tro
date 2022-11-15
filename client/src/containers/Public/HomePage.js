import React from "react";
import { text } from "../../utils/constant";
import { Province, ItemSidebar } from "../../components";
import { List, Pagination } from "./index";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [params] = useSearchParams();
  const { categories } = useSelector((state) => state.app);
  console.log(
    "🚀 ~ file: HomePage.js ~ line 11 ~ HomePage ~ categories",
    categories
  );
  return (
    <div className="flex flex-col w-full gap-3 border border-red-500">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESC}</p>
      </div>
      <Province></Province>
      <div className="flex w-full gap-4">
        <div className="w-[70%]">
          <List page={params.get("page")}></List>
          <Pagination page={params.get("page")}></Pagination>
          <div className="h-[500px]"></div>
        </div>
        <div className="w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center">
          <ItemSidebar
            content={categories}
            title="Danh sách cho thuê"
          ></ItemSidebar>
          <ItemSidebar title="Xem theo giá"></ItemSidebar>
          <ItemSidebar title="Xem theo diện tích"></ItemSidebar>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
