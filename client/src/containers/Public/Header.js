import React, { useCallback, useEffect, useRef } from "react";
import logo from "../../assets/logo.svg";
import { Button } from "../../components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { path } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const headerRef = useRef();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { currentData } = useSelector((state) => state.user);

  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);
  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams.get("page")]);
  return (
    <div ref={headerRef} className="w-3/5">
      <div className="flex items-center justify-between w-full">
        <Link to={"/"}>
          <img
            // src={logo}
            alt="Chỗ này là logo"
            className="w-[240px] h-[70px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <>
              {/* <small>PhongtroSV xin chào!</small> */}
              <Button
                text={"Đăng nhập"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(false)}
              ></Button>
              <Button
                text={"Đăng ký"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(true)}
              ></Button>
            </>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>{currentData.name}</small>
              <Button
                text={"Đăng xuất"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => dispatch(actions.logout())}
              ></Button>
            </div>
          )}
          <Button
            text={"Đăng tin mới"}
            textColor="text-white"
            bgColor="bg-third"
            icAfter={AiOutlinePlusCircle}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
