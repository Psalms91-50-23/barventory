import React, { useState } from "react";
import { connect } from "react-redux";
import { register, login } from "../apis/authApi";
import PageHeader from "./PageHeader";
import { Redirect } from "react-router-dom";

function Home(props) {
  const [showPopup, setShowPopup] = useState(false);

  //Login or Register
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [userObject, setUserObject] = useState({
    username: "",
    password: "",
    name: "",
  });

  const [error, setError] = useState(null);

  const showLogin = (e) => {
    setIsLogin(true);
    setShowPopup(true);
  };

  const showRegister = (e) => {
    setIsLogin(false);
    setShowPopup(true);
  };

  const getTitle = () => {
    return isLogin ? "Log In" : "Sign Up";
  };

  function onChangeHandler(e) {
    setUserObject({
      ...userObject,
      [e.target.name]: e.target.value,
    });
  }

  function formSubmit(e) {
    setError(null);
    var func = isLogin ? login : register;
    func({
      username: userObject.username,
      name: userObject.name,
      password: userObject.password,
    })
      .then((user) => {
        props.history.push("/inventory");
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <>
      <div className="homescreen">
        <img src="/img/barventory-logo.png" />
        <button className="login" onClick={showLogin}>
          Log in
        </button>
        <button className="sign-up" onClick={showRegister}>
          or Sign Up
        </button>

        <div className={"popup" + (showPopup ? " active" : "")}>
          <div className="popup-bg" onClick={() => setShowPopup(false)}></div>
          <div className="popup-content">
            <PageHeader
              title={getTitle()}
              leftAction={
                <button onClick={() => setShowPopup(false)}>Cancel</button>
              }
            />
            {!isLogin && (
              <input
                name="name"
                placeholder="Name"
                value={userObject.name}
                onChange={onChangeHandler}
              />
            )}
            <input
              name="username"
              placeholder="Email"
              autoCapitalize="off"
              value={userObject.username}
              onChange={onChangeHandler}
            />
            <div className="w-100 input-password">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                autoCapitalize="off"
                placeholder="Password"
                value={userObject.password}
                onChange={onChangeHandler}
              />
              {userObject.password && (
                <button
                  className="button password-show"
                  onClick={(e) => setShowPassword((p) => !p)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              )}
            </div>
            <button className="submit" onClick={formSubmit}>
              {getTitle()}
            </button>
            {error && <p className="error text-center">{error}</p>}
          </div>
        </div>
      </div>
      {localStorage.getItem("token") && <Redirect to="/inventory" />}
    </>
  );
}

export default connect()(Home);
