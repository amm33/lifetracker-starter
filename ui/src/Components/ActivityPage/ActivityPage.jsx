import * as React from "react";
import "./ActivityPage.css";
import { useState } from "react";
import Login from "../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const ActivityPage = (props) => {
  return (
    <div className="nutrition-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h1>Activity</h1>
          </div>
        </main>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser} />
      )}
    </div>
  );
};

export default ActivityPage;
