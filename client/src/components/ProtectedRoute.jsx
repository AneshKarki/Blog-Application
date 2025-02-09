import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const { isLoggedIn } = useContext(AuthContext);
  const isLoggedIn = localStorage.getItem("token");
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
