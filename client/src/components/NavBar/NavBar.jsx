import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const { isLoggedIn, handleLogOut } = useContext(AuthContext);
  return (
    <>
      <div className="NavBarDiv">
        <div className="navbarLogo">
          <img src={"../../../public/blog.png"} alt="" />
        </div>
        <div className="nextDiv">
          <ScrollLink to="home" smooth={true} duration={500}>
            <div>Home</div>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500}>
            <div>About</div>
          </ScrollLink>
          <ScrollLink to="footer" smooth={true} duration={500}>
            <div>Contact</div>
          </ScrollLink>
          <RouterLink
            to="/showBlog"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div>Blogs</div>
          </RouterLink>
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
            <RouterLink
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>Login</div>
            </RouterLink>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
