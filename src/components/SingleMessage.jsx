import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const SingleMessage = ({ message }) => {
  const scroll = useRef();
  const { authuser, selecteduser } = useSelector((store) => store.user);
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      <div
        ref={scroll}
        className={`chat ${
          authuser._id === message.senderId ? "chat-end" : "chat-start"
        } `}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src={`${
                message.senderId === authuser._id
                  ? authuser.profilePhoto
                  : selecteduser.profilePhoto
              }`}
              alt="Chandler"
            />
          </div>
        </div>
        <div className="chat-header"></div>
        <div className="chat-bubble bg-sky-600 max-w-[250px] overflow-hidden">
          {message?.message}
        </div>
        <time className="text-xs font-semibold text-white opacity-50">
          12:45
        </time>
      </div>
    </>
  );
};

export default SingleMessage;
