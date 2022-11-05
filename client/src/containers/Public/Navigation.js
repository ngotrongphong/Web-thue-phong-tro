import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { apiGetCategories } from "../../services/category";
import { formatVietnameseToString } from "../../utils/constant";
import * as actions from "../../store/actions";

const notActive = "hover:bg-third py-2 px-4 h-full flex items-center";
const active = "hover:bg-third py-2 px-4 h-full flex items-center bg-third";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategorises = async () => {
      const response = await apiGetCategories();
      if (response?.data.err === 0) {
        setCategories(response.data.response);
      }
    };
    fetchCategorises();
  }, []);

  return (
    <div className="flex items-center justify-center w-screen text-white bg-secondary">
      <div className="flex items-center w-3/5 text-sm font-medium ">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="flex items-center justify-center h-full"
              >
                <NavLink
                  to={`/${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
