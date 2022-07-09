import * as React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="center">
        <img
          src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
          alt="Faded Watch"
        ></img>
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>
      <div className="bottomImages">
        <div className="Fitness">
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg"
            alt="Fitness Icon"
          ></img>
          <p>Fitness</p>
        </div>
        <div className="Food">
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg"
            alt="Food Icon"
          ></img>
          <p>Food</p>
        </div>
        <div className="Rest">
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
            alt="Rest Icon"
          ></img>
          <p>Rest</p>
        </div>
        <div className="Planner">
          <img
            src="http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg"
            alt="Planner Icon"
          ></img>
          <p>Planner</p>
        </div>
      </div>
    </div>
  );
}
