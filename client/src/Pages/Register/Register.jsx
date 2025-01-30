import { useState } from "react";
import axios from "axios";
import "./Register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        });
        if (res) {
          console.log(res);
        }
      } catch (err) {
        console.log(err);
      }
    //   setEmail("");
    //   setPassword("");
    }
  };
  return (
    <>
      <div className="backgrdDiv">
        <div className="blurDiv">
          <div className="registerDiv">
            <div className="RYH">Register YourSelf Here</div>
            <form onSubmit={register}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
