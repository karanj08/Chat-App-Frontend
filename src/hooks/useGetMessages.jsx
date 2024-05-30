import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessages } from "../redux/messageSlice";
const useGetMessages = () => {
  const { selecteduser } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchmessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8000/api/v1/message/${selecteduser._id}`
        );
        console.log(res);
        dispatch(setMessages(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchmessages();
  }, [selecteduser?._id]);
};

export default useGetMessages;
