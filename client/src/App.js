import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  RentalApartment,
  RentalHouse,
  RentalRoom,
  RentalSpace,
  HomePage,
} from "./containers/Public";
import { path } from "./utils/constant";

function App() {
  return (
    <div className="w-screen h-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home></Home>}>
          <Route path="*" element={<HomePage></HomePage>}></Route>
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
