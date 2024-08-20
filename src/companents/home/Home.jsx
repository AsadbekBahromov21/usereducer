import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
const Home = () => {
  return (
    <>
      <div className="bg-[#eee]">
        <div className="container mx-auto flex justify-between py-4 bg-[#eee]">
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/header"}>Header</NavLink>
          <NavLink to={"/grandchildr"}>grandchildr</NavLink>
          <NavLink to={"/WishList"}> WishList;</NavLink>
        </div>
      </div>
      <Header />
    </>
  );
};

export default Home;
