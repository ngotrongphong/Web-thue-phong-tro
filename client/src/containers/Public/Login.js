import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire("Oops !", msg, "error");
  }, [msg, update]);

  const handleSubmit = async () => {
    let finalPayLoad = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayLoad);
    if (invalids === 0)
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
  };

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn cần nhập thông tin này",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu tối thiểu 6 ký tự",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ",
              },
            ]);
            invalids++;
          }
          break;
        default:
          break;
      }
    });
    return invalids;
    console.log(fields);
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">
        {isRegister ? "Tạo tài khoản mới" : "Đăng nhập"}
      </h3>
      <div className="flex flex-col w-full gap-5">
        {isRegister && (
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"HỌ TÊN"}
            value={payload.name}
            setValue={setPayload}
            keyPayload={"name"}
          ></InputForm>
        )}
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          keyPayload={"phone"}
        ></InputForm>
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          keyPayload={"password"}
          type="password"
        ></InputForm>
        <Button
          text={isRegister ? "Đăng ký" : "Đăng nhập"}
          bgColor="bg-secondary"
          textColor="text-white"
          fullWidth
          onClick={handleSubmit}
        ></Button>
      </div>
      <div className="flex items-center justify-between mt-7">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản?
            <span
              onClick={() => {
                setIsRegister(false);
                setPayload({
                  phone: "",
                  password: "",
                  name: "",
                });
                setInvalidFields("");
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
                setPayload({
                  phone: "",
                  password: "",
                  name: "",
                });
                setInvalidFields("");
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
