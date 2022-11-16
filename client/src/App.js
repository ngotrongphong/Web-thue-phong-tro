import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  RentalApartment,
  RentalHouse,
  RentalRoom,
  RentalSpace,
  HomePage,
  DetailPost,
} from "./containers/Public";
import { path } from "./utils/constant";

function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home></Home>}>
          <Route path="*" element={<HomePage></HomePage>}></Route>
          <Route path={path.HOME__PAGE} element={<HomePage></HomePage>}></Route>
          <Route path={path.STAR} element={<HomePage></HomePage>}></Route>
          <Route path={path.LOGIN} element={<Login></Login>}></Route>
          <Route
            path={path.CHO_THUE_CAN_HO}
            element={<RentalApartment></RentalApartment>}
          ></Route>
          <Route
            path={path.CHO_THUE_MAT_BANG}
            element={<RentalSpace></RentalSpace>}
          ></Route>
          <Route
            path={path.CHO_THUE_PHONG_TRO}
            element={<RentalRoom></RentalRoom>}
          ></Route>
          <Route
            path={path.NHA_CHO_THUE}
            element={<RentalHouse></RentalHouse>}
          ></Route>
          <Route
            path={path.DETAIL_POST__TITLE__POSTID}
            element={<DetailPost></DetailPost>}
          ></Route>
          <Route
            path={"chi-tiet/*"}
            element={<DetailPost></DetailPost>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
