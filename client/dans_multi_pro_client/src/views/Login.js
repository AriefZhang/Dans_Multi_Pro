import "../assets/Login.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginAsync } from "../store/action/userAction";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  const changePayload = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };


  const login = (e) => {
    e.preventDefault();

    dispatch(userLoginAsync(payload)).then((data) => {
      if (!data) navigate("/");
    });
  };

  return (
    <div className="container-login">
      <div class="login-wrap">
        <form
          onSubmit={login}
          style={{
            zIndex: "20",
          }}
          className="login-html"
        >
          <div className="">
            <label className="form-label" style={{color: "black"}}>Email address</label>
            <input
              name="username"
              value={payload.username}
              onChange={changePayload}
              type="text"
              className=""
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{color: "black"}}>Password</label>
            <input
              name="password"
              value={payload.password}
              onChange={changePayload}
              type="password"
              className=""
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
