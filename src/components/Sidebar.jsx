import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthuser, setsearchuser } from "../redux/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const { authuser, otherusers } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handlesearch = (e) => {
    e.preventDefault();
    const searcheduser = otherusers?.find((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    // console.log(searcheduser);
    if (searcheduser) {
      dispatch(setsearchuser([searcheduser]));
    } else {
      toast.error(`user not found`);
    }
    setsearch("");
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${process.env.BASE_URI}/api/v1/user/logout`);
      console.log(`${process.env.BASE_URI}/api/v1/user/logout`);
      // console.log(res);
      navigate("/login");
      toast.success(`${res.data.message} ${authuser.fullname}`);
      dispatch(setAuthuser(null));
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };

  return (
    <div className=" border-slate-500 py-4 px-2 flex flex-col gap-2 overflow-auto  justify-between">
      <form action="" className="flex items-center" onSubmit={handlesearch}>
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
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
