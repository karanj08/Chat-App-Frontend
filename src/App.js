import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import Homepage from "./components/Homepage.jsx";
import Login from "./components/Login.jsx";

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
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
