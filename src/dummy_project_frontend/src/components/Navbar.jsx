import React, { useEffect, useState, useContext } from "react";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../App";

function Navbar() {
  const { isAuthenticated, handleLogin } = useContext(AuthContext);

  return (
    <div className="flex flex-row w-[100%] bg-[#0e0e0e] bg-opacity-60 p-10 fixed top-0 z-20">
      <Toaster
        toastOptions={{
          className: "toast-alert",
          style: {
            fontSize: "1rem",
            fontFamily: "sans-serif",
            border: "1px solid #ffffff",
            padding: "16px",
            color: "#FFFFFF",
            backgroundColor: "#0E0E0E",
          },
        }}
      />
      <div className="font-black">PYK</div>
      <div className="flex flex-row gap-8 mx-auto text-[1rem] font-bold items-center">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">Jobs</div>
        <div className="cursor-pointer">How It Works</div>
      </div>
      <div
        className="flex flex-row font-bold items-center text-[1rem] cursor-pointer"
        onClick={handleLogin}>
        {isAuthenticated ? "Log Out" : "Log In"}
      </div>
    </div>
  );
}

export default Navbar;
