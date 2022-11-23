import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Contact, Intro } from "../../components";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full gap-6 ">
      <Header></Header>
      <Navigation></Navigation>
      <Search></Search>

      <div className="flex flex-col items-start justify-start w-4/5 mt-3 lg:w-3/5">
        <Outlet></Outlet>
      </div>
      <Intro></Intro>
      <Contact></Contact>
      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
