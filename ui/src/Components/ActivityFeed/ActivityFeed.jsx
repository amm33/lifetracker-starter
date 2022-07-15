// import * as React from "react";
// import "./ActivityFeed.css";
// import { useState, useEffect } from "react";
// import Stats from "../Stats/Stats";
// import { Link } from "react-router-dom";
// import apiClient from "../../services/apiClient";

// export default function ActivityFeed(props) {
//   const [isFetching, setIsFetching] = useState(false);
//   const [activity, setActivity] = useState([]);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchActivities = async () => {
//       if (!(Object.keys(props.user).length === 0)) {
//         setIsFetching(true);

//         const { data, error } = await apiClient.listActivities(props.user.id);
//         if (error) {
//           setError(error);
//         }
//         if (data) {
//           setActivity(data.activities);
//         }
//         setIsFetching(false);
//       }
//     };

//     fetchActivities();
//   }, []);
//   return (
//     <div className="activity-feed">
//       <div className="actions">
//         <h2>Activity Feed</h2>
//         <div className="buttons">
//           <ul className="links">
//             <li>
//               <Link className="exercise" to="/exercise/create">
//                 Add Exercise
//               </Link>
//             </li>
//             <li>
//               <Link className="nutrition" to="/nutrition/create">
//                 Log Nutrition
//               </Link>
//             </li>
//             <li>
//               <Link className="sleep" to="/sleep/create">
//                 Record Sleep
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
{
  /* <div className="stats">
        <h4>Average Calories Per Category</h4>
        {activity.length === 0 ? (
          <div className="empty">
            <h2 className="here">Nothing here yet.</h2>
          </div>
        ) : (
          <div className="per-category">
            {activity.length > 6
              ? activity.slice(0, 6).map((element, idx) => {
                  return (
                    <SummaryStat
                      type={"card-cat"}
                      stat={element.sum / element.count}
                      label={"calories"}
                      substat={element.category}
                      key={idx}
                    ></SummaryStat>
                  );
                })
              : activity.map((element, idx) => {
                  return (
                    <Stats
                      type={"card-cat"}
                      stat={element.sum / element.count}
                      label={"calories"}
                      substat={element.category}
                      key={idx}
                    ></Stats>
                  );
                })}
          </div>
        )}
      </div> */
}
{
  /* <div className="stats">
        <div className="main">
          <div className="SummaryStat large gold">
            <div className="background">
              <p>Total Exercise Minutes</p>
              <h1>0</h1>
            </div>
          </div>
          <div className="SummaryStat large purple">
            <div className="background">
              <p>Avg Sleep Hours</p>
              <h1>0</h1>
            </div>
          </div>
          <div className="SummaryStat large aqua">
            <div className="background">
              <p>Avg Daily Calories</p>
              <h1>0</h1>
            </div>
          </div>
        </div>
        <h4>More Stats</h4>
        <div className="more">
          <div className="SummaryStat small teal">
            <div className="background">
              <p>Maximum Hourly Calories</p>
              <h1>0</h1>
            </div>
          </div>
          <div className="SummaryStat small orange">
            <div className="background">
              <p>Avg Exercise Intensity</p>
              <h1>0</h1>
            </div>
          </div>
          <div className="SummaryStat small red">
            <div className="background">
              <p>Total Hours Slept</p>
              <h1>0</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} */
}

import * as React from "react";
import "./ActivityFeed.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";

export default function ActivityFeed(props) {
  const [isFetching, setIsFetching] = useState(false);
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchActivities = async () => {
      if (!(Object.keys(props.user).length === 0)) {
        setIsFetching(true);

        const { data, error } = await apiClient.listActivities(props.user.id);
        if (error) {
          setError(error);
        }
        if (data) {
          setActivity(data.activities);
        }
        setIsFetching(false);
      }
    };

    fetchActivities();
  }, []);
  return (
    <div className="ActivityPage">
      <div className="content">
        <div className="actions">
          <h2 className="heading">Activity Feed</h2>
          <div className="buttons">
            <a href="/exercise/create">
              <button className="Button outline small outline gold ">
                Add Exercise
              </button>
            </a>
            <a href="/sleep/create">
              <button className="Button outline small outline blue">
                Log Sleep
              </button>
            </a>
            <a href="/nutrition/create">
              <button className="Button outline small outline aqua ">
                Record Nutrition
              </button>
            </a>
          </div>
        </div>
        <div className="stats">
          <div className="main">
            <div className="SummaryStat large gold">
              <div className="background">
                <p>Total Exercise Minutes</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat large purple">
              <div className="background">
                <p>Avg Sleep Hours</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat large aqua">
              <div className="background">
                <p>Avg Daily Calories</p>
                <h1>0</h1>
              </div>
            </div>
          </div>
          <h4>More Stats</h4>
          <div className="more">
            <div className="SummaryStat small teal">
              <div className="background">
                <p>Maximum Hourly Calories</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat small orange">
              <div className="background">
                <p>Avg Exercise Intensity</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat small red">
              <div className="background">
                <p>Total Hours Slept</p>
                <h1>0</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
