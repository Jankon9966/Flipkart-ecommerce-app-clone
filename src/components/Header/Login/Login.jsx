import React, { useState } from "react";
import loginIcon from "../../../assets/profile_photo.svg";
import DropDown from "./DropDown";

const Login = () => {

  const [dropdown, setDropDown] = useState(false);

  const onClickHandler = () => {
    
    if (!dropdown) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  }

  return (
    <div className="login">
      <button className="header_btn" onClick={onClickHandler}>
        <img src={loginIcon} alt="Profile image" />
        Login
      </button>
      {dropdown && <DropDown />}
    </div>
  );
};

export default Login;
