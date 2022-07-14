import * as React from "react";
import "./ExercisePage.css";
import { Routes, Route } from "react-router-dom";
import ExerciseOverview from "../ExerciseOverview/ExerciseOverview";
import LoginForm from "../LoginForm/LoginForm";

const ExercisePage = (props) => {
  return (
    <div className="exercise-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h1>Exercise</h1>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <ExerciseOverview exercise={props.exercise} user={props.user} />
              }
            ></Route>
            <Route path="/create" element={<ExerciseForm />}></Route>
          </Routes>
        </main>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser}></LoginForm>
      )}
    </div>
  );
};

export default ExercisePage;
