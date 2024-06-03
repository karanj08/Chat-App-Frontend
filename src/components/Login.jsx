import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthuser } from "../redux/userSlice";

//
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.BASE_URI}/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(res);
      toast.success(`Welcome,${res.data.fullname}`);
      navigate("/");
      dispatch(setAuthuser(res.data));
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div
        className="w-full p-6 shadow-md 
h-full  bg-black-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100
"
      >
        <h1 className="text-3xl font-bold text-center text-gray-300 ">Login</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="label p-2 font-semibold ">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Bing-a-ling"
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label className="label p-2 font-semibold ">
              <span className="text-base label-text text-white">password</span>
            </label>
            <input
              type="text"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Chandler Bing's job"
              className="w-full input input-bordered"
            />
          </div>

          <div className="mt-6 flex gap-2 items-center">
            <button type="submit" className="btn  btn-sm w-36">
              Login
            </button>
            <Link to="/register" className="text-white underline">
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
