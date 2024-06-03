import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import Homepage from "./components/Homepage.jsx";
import Login from "./components/Login.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice.js";
import { setonlineuser } from "./redux/userSlice.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  const { authuser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { socket } = useSelector((store) => store.socket);
  // const navigate = useNavigate();

  useEffect(() => {
    if (authuser) {
      const socket = io(`${process.env.BASE_URI}`, {
        query: { userId: authuser._id },
      });
      dispatch(setSocket(socket));

      socket?.on("getonlineusers", (onlineusers) => {
        dispatch(setonlineuser(onlineusers));
        // console.log("onlineusers", onlineusers);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authuser, dispatch]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
