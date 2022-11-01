import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { apiRegister } from "../../services/auth";
import { useLocation } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  const handleSubmit = async () => {
    console.log(payload);
    dispatch(actions.register(payload));
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">
        {isRegister ? "Tạo tài khoản mới" : "Đăng nhập"}
      </h3>
      <div className="flex flex-col w-full gap-5">
        {isRegister && (
          <InputForm
            label={"HỌ TÊN"}
            value={payload.name}
            setValue={setPayload}
            type={"name"}
          ></InputForm>
        )}
        <InputForm
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          type={"phone"}
        ></InputForm>
        <InputForm
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          type={"password"}
        ></InputForm>
        <Button
          text={isRegister ? "Tạo tài khoản" : "Đăng nhập"}
          bgColor="bg-secondary"
          textColor="text-white"
          fullWidth
          onClick={handleSubmit}
        ></Button>
      </div>
      <div className="flex items-center justify-between mt-7">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản?{" "}
            <span
              onClick={() => {
                setIsRegister(false);
              }}
              className="text-blue-500 hover:text-[red] cursor-pointer"
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Quên mật khẩu
            </small>
            <small
              onClick={() => {
                setIsRegister(true);
              }}
              className="text-[blue] hover:text-[red] cursor-pointer"
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
