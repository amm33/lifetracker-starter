import * as React from "react";
import "./ActivityPage.css";
import { useState } from "react";
import Login from "../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

const ActivityPage = (props) => {
  // <div className="activity-feed">
  //   <h2>Activity Feed</h2>
  //   <div className="per-category">
  //     <h4>Average Calories Per Category</h4>
  //   </div>

  //   <div className="per-day">
  //     <h4>Total Calories Per Day</h4>
  //   </div>
  // </div>;
  console.log("propsAP", props);
  const navigate = useNavigate();
  return (
    <div className="activity-feed">
      {props.user.email ? <></> : <Login user={props.user} set></Login>}
    </div>
  );
};

export default ActivityPage;
