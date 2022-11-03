import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { name: "Trang chủ", path: "home" },
  { name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
  { name: "Nhà cho thuê", path: "nha-cho-thue" },
  { name: "Cho thuê căn hộ", path: "cho-thue-can-ho" },
  { name: "Cho thuê mặt bằng", path: "cho-thue-mat-bang" },
];

const notActive = "hover:bg-third py-2 px-4 h-full flex items-center";
const active = "hover:bg-third py-2 px-4 h-full flex items-center bg-third";

const Navigation = () => {
  return (
    <div className="flex items-center justify-center w-screen text-white bg-secondary">
      <div className="flex items-center text-sm font-medium w-1100 ">
        {nav?.length > 0 &&
          nav.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.name}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
