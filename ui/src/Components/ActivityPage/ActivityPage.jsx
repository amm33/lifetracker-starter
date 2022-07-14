import * as React from "react";
import "./ActivityPage.css";
import { useState } from "react";
import Login from "../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { Link } from "react-router-dom";

const ActivityPage = (props) => {
  return (
    <div className="activity-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h2>Activity Feed</h2>
            <div className="buttons">
              <Link
                to="/exercise/create"
                className="Button outline small outline gold"
              >
                Add Exercise
              </Link>
              <Link
                to="/sleep/create"
                className="Button outline small outline blue"
              >
                Log Sleep
              </Link>
              <Link
                to="/nutrition/create"
                className="Button outline small outline aqua"
              >
                Record Nutrition
              </Link>
            </div>
          </div>
          <div className="SummaryStat large gold">
            <div className="background">
              <p>Total Exercise Minutes</p>
              <h1>0</h1>
            </div>
          </div>
        </main>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser} />
      )}
    </div>
  );
};

export default ActivityPage;
