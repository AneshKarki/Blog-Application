import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/login";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreateBlog from "./Pages/createBLog/CreateBlog";
import Blogs from "./Pages/Blogs/Blogs";
import ProtectedRoute from "./components/ProtectedRoute";

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
      element: (
        <ProtectedRoute>
          <CreateBlog />
        </ProtectedRoute>
      ),
    },
    {
      path: "/blogs/:id",

      element: (
        <ProtectedRoute>
          <Blogs />
        </ProtectedRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
