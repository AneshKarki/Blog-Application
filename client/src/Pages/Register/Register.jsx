import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    if (email.length == 0) {
      alert("please insert the email");
    } else if (password.length < 5) {
      alert("please insert the password");
    } else {
      try {
        const res = await axios.post("http://localhost:5011/api/registerUser", {
          email,
          password,
          fullName,
        });
        if (res.status == 200) {
          alert("register successfully");
          setEmail("");
          setFullName("");
          setPassword("");
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="backgrdDiv">
        <div className="blurDiv">
          <div className="registerDiv">
            <div className="RYH">Register YourSelf Here</div>
            <form onSubmit={register}>
              <label htmlFor="fname">Full Name</label>
              <br />
              <input
                name="fname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="inputFields"
                id="fullName"
                type="text"
              />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="inputFields"
                id="email"
                type="email"
              />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="inputFields"
                id="password"
                type="password"
              />
              <br />
              <button className="registerBtn" type="submit">
                Register
              </button>
            </form>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div style={{ paddingLeft: "50px ", color: "Black" }}>
                <b>Already Have Accounts? Login</b>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
