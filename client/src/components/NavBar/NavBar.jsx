import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
const NavBar = () => {
  const { isLoggedIn, handleLogOut } = useContext(AuthContext);
  return (
    <>
      <div className="NavBarDiv">
        <div className="navbarLogo">
          <img src={"../../../public/blog.png"} alt="" />
        </div>
        <div className="nextDiv">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          {isLoggedIn ? (
            <div
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
              onClick={handleLogOut}
            >
              Log out
            </div>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>Login</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
