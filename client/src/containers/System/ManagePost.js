import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import moment from "moment";
import "moment/locale/vi";
import { Button, UpdatePost } from "../../components";

const ManagePost = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { postOfCurrent, dataEdit } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(actions.getPostsLimitAdmin());
  }, []);

  useEffect(() => {
    !dataEdit && setIsEdit(false);
  }, [dataEdit]);

  const checkStatus = (dateString) =>
    moment(dateString, process.env.REACT_APP_FORMAT_DATE).isSameOrAfter(
      new Date().toDateString()
    );

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h1 className="text-3xl font-medium">Quản lý tin đăng</h1>
        <select
          name=""
          id=""
          className="p-2 border border-gray-200 rounded-md outline-none"
        >
          <option value="">Lọc theo trạng thái</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-gray-100">
            <th className="flex-1 p-2 border">Mã tin</th>
            <th className="flex-1 p-2 border">Ảnh đại diện</th>
            <th className="flex-1 p-2 border">Tiêu đề</th>
            <th className="flex-1 p-2 border">Giá</th>
            <th className="flex-1 p-2 border">Ngày bắt đầu</th>
            <th className="flex-1 p-2 border">Ngày hết hạn</th>
            <th className="flex-1 p-2 border">Trạng thái</th>
            <th className="flex-1 p-2 border">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {!postOfCurrent ? (
            <tr>
              <td>dasdasd</td>
            </tr>
          ) : (
            postOfCurrent?.map((item) => {
              return (
                <tr className="flex items-center h-16" key={item.id}>
                  <td className="flex items-center justify-center flex-1 h-full px-2 border">
                    {item?.overviews?.code}
                  </td>
                  <td className="flex items-center justify-center flex-1 h-full px-2 border">
                    <img
                      src={JSON.parse(item?.images?.image)[0] || ""}
                      alt="img-post"
                      className="object-cover w-10 h-10 rounded-md"
                    />
                  </td>
                  <td className="flex items-center justify-center flex-1 h-full px-2 border">
                    {`${item?.title?.slice(0, 40)}...`}
                  </td>
                  <td className="flex items-center justify-center flex-1 h-full px-2 border">
                    {item?.attributes?.price}
                  </td>
                  <td className="flex items-center justify-center flex-1 h-full px-2 border">
                    {item?.overviews?.created}
                  </td>
                  <td className="flex items-center justify-center flex-1 h-full px-2 border">
                    {item?.overviews?.expired}
                  </td>
                  <td className="flex items-center justify-center flex-1 h-full px-2 border">
                    {checkStatus(item?.overviews?.expired?.split(" ")[3])
                      ? "Đang hoạt động"
                      : "Đã hết hạn"}
                  </td>
                  <td className="flex items-center justify-center flex-1 h-full gap-4 px-2 border">
                    <Button
                      text="Sửa"
                      bgColor="bg-green-600"
                      textColor="text-white"
                      onClick={() => {
                        dispatch(actions.editData(item));
                        setIsEdit(true);
                      }}
                    ></Button>
                    <Button
                      text="Xóa"
                      bgColor="bg-orange-600"
                      textColor="text-white"
                    ></Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
    </div>
  );
};

export default ManagePost;
