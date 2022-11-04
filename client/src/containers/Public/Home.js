import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full h-full ">
      <Header></Header>
      <Navigation></Navigation>
      <div className="flex flex-col items-center justify-start mt-3 w-1100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
