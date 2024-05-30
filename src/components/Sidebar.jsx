import React from "react";
import { IoMdSearch } from "react-icons/io";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { authuser } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout");
      // console.log(res);
      navigate("/login");
      toast(`${res.data.message} ${authuser.fullname}`);
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };
  return (
    <div className=" border-slate-500 py-4 px-2 flex flex-col gap-2 overflow-auto  justify-between">
      <form action="" className="flex items-center">
        <input
          className="input rounded-l-md rounded-r-none"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn rounded-r-md rounded-l-none">
          <IoMdSearch className="h-6 w-6" />
        </button>
      </form>

      <div className="flex-grow ">
        <OtherUsers />
      </div>
      <div className="mt-2 ">
        <button className="btn btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
