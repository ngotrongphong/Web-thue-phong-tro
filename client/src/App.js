import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./containers/Public";
import { path } from "./utils/constant";

function App() {
  return (
    <div className="w-screen h-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home></Home>}></Route>
        <Route path={path.LOGIN} element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
