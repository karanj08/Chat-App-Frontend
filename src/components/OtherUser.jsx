import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelecteduser } from "../redux/userSlice";
const OtherUser = ({ user }) => {
  const { selecteduser, onlineusers } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleselectuser = (user) => {
    dispatch(setSelecteduser(user));
  };
  const isonline = onlineusers?.includes(user._id);
  return (
    <>
      <div
        onClick={() => handleselectuser(user)}
        className={`flex gap-4 items-center px-2 py-2 rounded-md hover:bg-slate-300 bg-white mb-1 ${
          selecteduser?._id === user?._id ? "bg-slate-300" : "bg-white"
        }`}
      >
        <div className={`${isonline ? "avatar online" : "avatar oflline"} `}>
          <div className="w-10 rounded-full">
            <img src={user?.profilePhoto} alt="user profile" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex flex-1 text-black font-semibold">
            <p>{user?.username}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherUser;
