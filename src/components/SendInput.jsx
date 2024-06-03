import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const SendInput = () => {
  const { selecteduser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [message, setmessage] = useState(" ");
  const { messages } = useSelector((store) => store.message);

  const handlemessage = async (e) => {
    e.preventDefault();
    try {
      console.log(`${selecteduser._id}`);
      const res = await axios.post(
        `${process.env.BASE_URI}/api/v1/message/send/${selecteduser._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(messages);
      console.log(res.data.newMessage);

      console.log(res.data.newMessage.updatedAt);
      dispatch(setMessages([...messages, res?.data?.newMessage]));
      setmessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white m-2 rounded-full items-center justify-center">
      <form
        onSubmit={handlemessage}
        action=""
        className="mx-4 flex flex-grow items-center justify-center"
      >
        <div className="w-full">
          <input
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            type="text"
            placeholder="Message"
            className="border text-md rounded-full block w-full bg-white text-black p-3 outline-none "
          />
        </div>
        <div className="mt-1">
          <button type="submit">
            <IoMdSend className="w-6 h-6 text-sky-500 hover:text-blue-700" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendInput;
