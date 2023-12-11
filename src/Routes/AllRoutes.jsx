import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Allpost from "../Pages/Allpost";
import Addpost from "../Pages/Addpost";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/posts" element={<Allpost />}></Route>
        <Route path="/addposts" element={<Addpost />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
