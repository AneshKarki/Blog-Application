import { useState } from "react";
import "./Login.css";
import axios from "axios";
// import { Navigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginP = async (e) => {
    console.log(email, password);
    e.preventDefault();
    if (email.length < 0 || password.length < 0) {
      alert("please fill all the fields");
    } else {
      try {
        const res = await axios.post("http://localhost:5011/api/loginUser", {
          email,
          password,
        });
        console.log(res);
        if (res.status == 200) {
          alert("login sucessfully");
          // Navigate
        } else {
          alert("incorrect credintials");
          setEmail("");
          setPassword("");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="loginMainDiv">
        <div className="pDiv">
          <p>
            <b>Welcome to Blog</b>
          </p>
        </div>
        <div className="formDiv">
          <div style={{ fontSize: "50px" }}>Login Here</div>
          <form onSubmit={loginP}>
            <label htmlFor="email" className="textL">
              Email
            </label>
            <br />
            <input
              id="email"
              className="imputL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />

            <label htmlFor="password" className="textL">
              Password
            </label>
            <br />
            <input
              id="password"
              className="imputL"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
            />

            <button className="btnsL" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
