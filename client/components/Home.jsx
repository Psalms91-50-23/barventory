import React, { useState } from "react";
import { connect } from "react-redux";
import PageHeader from "./PageHeader";

function Home(props) {
  const [showPopup, setShowPopup] = useState(false);

  //Login or Register
  const [login, setLogin] = useState(true);

  const showLogin = (e) => {
    setShowPopup(true);
  };
  
  const showRegister = (e) => {
    setLogin(false);
    setShowPopup(true);
  };

  const getTitle = () => {
    return login ? "Log In" : "Sign Up";
  }

  function formSubmit(e) {
    console.log(props)
    props.history.push("/inventory");
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
            {login && <input name="name" placeholder="Name" />}
            <input name="email" placeholder="Username" />
            <input name="password" placeholder="Password" />
            <button class="submit" onClick={formSubmit}>{getTitle()}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect()(Home);
