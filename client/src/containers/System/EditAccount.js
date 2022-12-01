import React, { useState } from "react";
import { InputReadOnly, InputFormV2, Button } from "../../components";
import anonAvatar from "../../assets/anon-avatar.png";

const EditAccount = () => {
  const [invalidFields, setInvalidFields] = useState([]);
  return (
    <div className="flex flex-col items-center flex-auto h-full">
      <h1 className="w-full py-4 text-3xl font-medium border-b border-gray-200">
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className="flex items-center justify-center w-3/5">
        <div className="flex flex-col w-full gap-4 py-6">
          <InputReadOnly direction="flex-row" label="Mã thành viên" />
          <InputReadOnly direction="flex-row" editPhone label="Số điện thoại" />
          <InputFormV2
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            direction="flex-row"
            label="Tên hiển thị"
          />
          <InputFormV2
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            direction="flex-row"
            label="Email"
          />
          <InputFormV2
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            direction="flex-row"
            label="Zalo"
          />
          <InputFormV2
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            direction="flex-row"
            label="Facebook"
          />
          <div className="flex">
            <label htmlFor="password" className="flex-none w-48">
              Mật khẩu
            </label>
            <small className="flex-auto h-12 text-blue-500 cursor-pointer">
              Đổi mật khẩu
            </small>
          </div>
          <div className="flex mb-6">
            <label className="flex-none w-48" htmlFor="avatar">
              Ảnh đại diện
            </label>
            <img
              src={anonAvatar}
              alt="avatar"
              className="object-cover rounded-full w-28 h-28"
            />
          </div>
          <Button
            text="Cập nhật"
            bgColor="bg-blue-600"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
