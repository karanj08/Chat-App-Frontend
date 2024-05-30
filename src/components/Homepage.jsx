import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
const Homepage = () => {
  return (
    <div className="flex bg-black-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 overflow-hidden sm:h-[450px] md:h-[550px]">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Homepage;
