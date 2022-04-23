import React from "react";
import Navbar from "./NavBar";
import { Outlet } from 'react-router-dom';

const WithNav = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default WithNav;
