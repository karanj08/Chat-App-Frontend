import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const handlegender = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        user
      );

      if (res.data.success) {
        navigate("/login");
        toast.success(`${res.data.message},One last step ${res.data.fullname}`);
      }
    } catch (error) {
      console.log(error);
    }
    setUser({
      fullname: "",
      username: "",
      password: "",
      confirmpassword: "",
      gender: "",
    });
  };

  const navigate = useNavigate();

  return (
    <div className="min-w-96 mx-auto">
      <div
        className="w-full p-6 shadow-md 
h-full  bg-black-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100
"
      >
        <h1 className="text-3xl font-bold text-center text-gray-300 ">
          Signup
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="label p-2 font-semibold ">
              <span className="text-base label-text text-white">Fullname</span>
            </label>
            <input
              value={user.fullname}
              onChange={(e) => {
                setUser({ ...user, fullname: e.target.value });
              }}
              type="text"
              placeholder="Chandler Muriel Bing"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label p-2 font-semibold ">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              type="text"
              placeholder="Bing-a-ling"
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label className="label p-2 font-semibold ">
              <span className="text-base label-text text-white">password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              type="text"
              placeholder="Chandler Bing's job"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label p-2 font-semibold ">
              <span className="text-base label-text text-white">
                confirm password
              </span>
            </label>
            <input
              value={user.confirmpassword}
              onChange={(e) => {
                setUser({ ...user, confirmpassword: e.target.value });
              }}
              type="text"
              placeholder="That's not even a word!!!"
              className="w-full input input-bordered"
            />
          </div>
          <div className="flex items-center gap-1 mt-2">
            <div className="form-control">
              <label className="label cursor-pointer gap-1">
                <span className="label-text text-white font-semibold">
                  Male:
                </span>
                <input
                  type="checkbox"
                  checked={user.gender === "male"}
                  onChange={() => handlegender("male")}
                  className="checkbox border-white"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer gap-1">
                <span className="label-text text-white font-semibold">
                  Female:
                </span>
                <input
                  type="checkbox"
                  checked={user.gender === "female"}
                  onChange={() => handlegender("female")}
                  className="checkbox border-white"
                />
              </label>
            </div>
          </div>

          <div className="mt-4 flex gap-2 items-center">
            <button type="submit" className="btn  btn-sm w-36">
              Signup
            </button>
            <Link to="/login" className="text-white underline">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// {
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// }
