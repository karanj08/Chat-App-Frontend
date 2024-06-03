import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { setSelecteduser, setsearchuser } from "../redux/userSlice";

const MessageContainer = () => {
  const { authuser, selecteduser, onlineusers } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch();
  const handleSelectuser = () => {
    dispatch(setSelecteduser(null));
    dispatch(setsearchuser([]));
  };
  const isonline = onlineusers?.includes(selecteduser?._id);
  return (
    <>
      {selecteduser ? (
        <div className="sm:min-w-[500px] flex flex-col justify-between">
          <div className="flex gap-4 items-center px-4 py-2 mb-2 bg-white">
            <div
              className={`${isonline ? "avatar online" : "avatar oflline"} `}
            >
              <div className="w-10 rounded-full">
                <img src={selecteduser?.profilePhoto} alt="Chandler" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex flex-1 text-black font-semibold">
                <p>{selecteduser?.username}</p>
              </div>
            </div>
            <button onClick={handleSelectuser}>
              <RxCross2 />
            </button>
          </div>
          <Messages />
          <SendInput />
        </div>
      ) : (
        <div className="sm:min-w-[450px] flex flex-col items-center justify-center p-4">
          <h1 className="text-white font-semibold text-2xl">
            Hey {authuser?.username},
          </h1>
          <h2 className=" text-xl text-white">
            let's connect with your loved ones.
          </h2>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
