import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  useGetOtherUsers();
  const { otherusers, searchuser } = useSelector((store) => store.user);
  // console.log(otherUsers);
  if (!otherusers) return;

  return (
    <>
      {searchuser.length ? (
        <div className="flex-col">
          {searchuser?.map((user) => {
            return <OtherUser key={user._id} user={user} />;
          })}
        </div>
      ) : (
        <div className="flex-col">
          {otherusers?.map((user) => {
            return <OtherUser key={user._id} user={user} />;
          })}
        </div>
      )}
    </>
  );
};

export default OtherUsers;
