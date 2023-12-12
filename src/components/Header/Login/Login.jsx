import React from "react";
import loginIcon from "../../../assets/profile_photo.svg";

const Login = () => {
  return (
    <div className="login">
      <button className="header_btn">
        <img src={loginIcon} alt="Profile image" />
        Login
      </button>
    </div>
  );
};

export default Login;
