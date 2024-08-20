import { Route, Routes } from "react-router-dom";
import Home from "./companents/home/Home";
import Header from "./companents/header/Header";
import Grandchild from "./companents/Grandchild";
import React from "react";
import WishList from "./companents/wishlist/WishList";
function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/grandchildr" element={<Grandchild />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
    </>
  );
}

export default App;
