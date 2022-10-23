import React, { useCallback } from "react";
import logo from "../../assets/logo.svg";
import { Button } from "../../components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);
  return (
    <div className="flex items-center justify-between w-1100">
      <img
        src={logo}
        alt="logo"
        className="w-[240px] h-[70px] object-contain"
      />
      <div className="flex items-center gap-1">
        <small>Phongtro123.com xin chào!</small>
        <Button
          text={"Đăng nhập"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={goLogin}
        ></Button>
        <Button
          text={"Đăng ký"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={goLogin}
        ></Button>
        <Button
          text={"Đăng tin mới"}
          textColor="text-white"
          bgColor="bg-third"
          icAfter={AiOutlinePlusCircle}
        ></Button>
      </div>
    </div>
  );
};

export default Header;
