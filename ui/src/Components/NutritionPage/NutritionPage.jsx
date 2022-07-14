import * as React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./NutritionPage.css";

const NutritionPage = (props) => {
  return (
    <div className="nutrition-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h1>Nutrition</h1>
          </div>
        </main>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser}></LoginForm>
      )}
    </div>
  );
};

export default NutritionPage;
