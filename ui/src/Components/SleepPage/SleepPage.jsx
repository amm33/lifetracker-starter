import * as React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./SleepPage.css";

const SleepPage = (props) => {
  return (
    <div className="sleep-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h1>Sleep</h1>
          </div>
        </main>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser}></LoginForm>
      )}
    </div>
  );
};

export default SleepPage;
