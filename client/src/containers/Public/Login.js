import React from "react";
import { InputForm, Button } from "../../components";

const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">Đăng nhập</h3>
      <div className="flex flex-col w-full gap-5">
        <InputForm label={"SỐ ĐIỆN THOẠI"}></InputForm>
        <InputForm label={"MẬT KHẨU"}></InputForm>
        <Button
          text="Đăng nhập"
          bgColor="bg-secondary"
          textColor="text-white"
          fullWidth
        ></Button>
      </div>
      <div className="flex items-center justify-between mt-7">
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Quên mật khẩu
        </small>
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Tạo tài khoản mới
        </small>
      </div>
    </div>
  );
};

export default Login;
