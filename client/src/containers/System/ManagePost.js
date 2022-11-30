import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import moment from "moment";
import "moment/locale/vi";

const ManagePost = () => {
  const dispatch = useDispatch();
  const { postOfCurrent } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(actions.getPostsLimitAdmin());
  }, []);

  const checkStatus = (dateString) =>
    moment(dateString, process.env.REACT_APP_FORMAT_DATE).isSameOrAfter(
      new Date().toDateString()
    );

  return (
    <div className="flex flex-col gap-6">
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
          <tr>
            <th className="p-2 border">Mã tin</th>
            <th className="p-2 border">Ảnh đại diện</th>
            <th className="p-2 border">Tiêu đề</th>
            <th className="p-2 border">Giá</th>
            <th className="p-2 border">Ngày bắt đầu</th>
            <th className="p-2 border">Ngày hết hạn</th>
            <th className="p-2 border">Trạng thái</th>
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
                <tr key={item.id}>
                  <td className="p-2 text-center border">
                    {item?.overviews?.code}
                  </td>
                  <td className="flex items-center justify-center p-2 border">
                    <img
                      src={JSON.parse(item?.images?.image)[0] || ""}
                      alt="img-post"
                      className="object-cover w-10 h-10 rounded-md"
                    />
                  </td>
                  <td className="p-2 text-center border">{item?.title}</td>
                  <td className="p-2 text-center border">
                    {item?.attributes?.price}
                  </td>
                  <td className="p-2 text-center border">
                    {item?.overviews?.created}
                  </td>
                  <td className="p-2 text-center border">
                    {item?.overviews?.expired}
                  </td>
                  <td className="p-2 text-center border">
                    {checkStatus(item?.overviews?.expired?.split(" ")[3])
                      ? "Đang hoạt động"
                      : "Đã hết hạn"}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePost;
