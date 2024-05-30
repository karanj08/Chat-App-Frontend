import { useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { setotherusers } from "../redux/userSlice";
const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:8000/api/v1/user/");
        dispatch(setotherusers(res.data.otherUser));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUser();
  });
};
export default useGetOtherUsers;
