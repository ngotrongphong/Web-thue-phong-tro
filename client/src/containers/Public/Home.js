import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full m-auto border border-red-500 w-1100">
      <Header></Header>
      <div className="flex flex-col items-center justify-start w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
