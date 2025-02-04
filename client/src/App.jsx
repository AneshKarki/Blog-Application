import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/login";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreateBlog from "./Pages/createBLog/CreateBlog";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/createblog",
      element: <CreateBlog />,
    },
    {
      path: "/blogs/:id",
      element: <Blogs />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
