import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
