import React, { useState } from "react";
import { InputForm, Button } from "../../components";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">
        {isRegister ? "Tạo tài khoản mới" : "Đăng nhập"}
      </h3>
      <div className="flex flex-col w-full gap-5">
        {isRegister && <InputForm label={"HỌ TÊN"}></InputForm>}
        <InputForm label={"SỐ ĐIỆN THOẠI"}></InputForm>
        <InputForm label={"MẬT KHẨU"}></InputForm>
        <Button
          text={isRegister ? "Tạo tài khoản" : "Đăng nhập"}
          bgColor="bg-secondary"
          textColor="text-white"
          fullWidth
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
