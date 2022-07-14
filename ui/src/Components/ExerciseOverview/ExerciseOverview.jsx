import * as React from "react";
import "./ExerciseOverview.css";
import { Link } from "react-router-dom";
// import ExerciseFeed from "../ExerciseFeed/ExerciseFeed";

const ExerciseOverview = (props) => {
  return (
    <div className="exercise-overview">
      <div className="header">
        <h3>Overview</h3>
        <Link className="addExercise" to="/exercise/create">
          Add Exercise
        </Link>
      </div>
      {/* <ExerciseFeed exercise={props.exercise} user={props.user} /> */}
    </div>
  );
};

export default ExerciseOverview;
