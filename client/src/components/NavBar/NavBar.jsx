import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
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
          <Link to="Login" style={{ textDecoration: "none", color: "inherit" }}>
            <div>Login</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
