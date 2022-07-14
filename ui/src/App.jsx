// import { useState, useEffect } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Container from "@mui/material/Container";
// import * as React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
// // import { AuthContextProvider, useAuthContext } from "../../contexts/auth";
// import apiClient from "../../services/apiClient";

// // Navbar
// import LandingPage from "./Components/LandingPage/LandingPage";
// import ActivityPage from "./Components/Activity/ActivityPage";
// import ExercisePage from "./Components/Exercise/ExercisePage";
// import Nutrition from "./Components/Nutrition/Nutrition";
// import Sleep from "./Components/Sleep/Sleep";
// import LoginForm from "./Components/LoginForm/LoginForm";
// import LoginPage from "./Components/LoginPage/LoginPage";
// // import Reg from "./Components/RegistrationForm/RegistrationForm";
// import NotFound from "./Components/NotFound/NotFound";
// import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";

// function App() {
//   //if logged in
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [nutrition, setNutrition] = useState([]);
//   const [sleep, setSleep] = useState([]);
//   const [exercise, setExercise] = useState([]);
//   const [name, setName] = useState("");
//   const [isClicked, setIsClicked] = useState(false);
//   const [user, setUser] = useState(null);

//   console.log(localStorage.getItem("lifestarter_token"));

//   useEffect(() => {
//     const fetchAuthedUser = async () => {
//       const { data, error } = await apiClient.fetchUserFromToken();
//       if (data) setUser(data.user);
//       // if (error) setError(error);
//     };

//     const token = localStorage.getItem("lifestarter_token");
//     //  console.log(token)
//     if (token) {
//       apiClient.setToken(token);
//       fetchAuthedUser();
//     }
//   }, []);

//   return (
//     <>
//       <div className="app">
//         <BrowserRouter>
//           <Navbar
//             isLoggedIn={isLoggedIn}
//             setIsLoggedIn={setIsLoggedIn}
//           ></Navbar>

//           {/* <Container
//         maxWidth={false}
//         sx={{ backgroundColor: "orange", flexGrow: 1 }}
//       >
//         My Container
//       </Container> */}

//           {/* Home route */}
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//           </Routes>

//           {/* Activity Route */}
//           <Routes>
//             <Route path="/activity" element={<ActivityPage />} />
//           </Routes>

//           {/* Exercise Route */}
//           <Routes>
//             <Route path="/exercise" element={<ExercisePage />}></Route>
//           </Routes>

//           {/* Nutrition Route  */}
//           <Routes>
//             <Route path="/sutrition" element={<Nutrition />}></Route>
//           </Routes>

//           {/* Sleep Route  */}
//           <Routes>
//             <Route path="/sleep" element={<Sleep />}></Route>
//           </Routes>

//           {/* Login Route  */}
//           <Routes>
//             <Route path="/login" element={<LoginPage />}></Route>
//           </Routes>

//           {/* Sign Up Route  */}
//           <Routes>
//             <Route path="/register" element={<RegistrationForm />}></Route>
//           </Routes>

//           {/* not found */}
//           {/* <Routes>
//             <Route path="*" element={<NotFound />}></Route>
//           </Routes> */}
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }

// export default App;

import * as React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import NutritionPage from "./Components/NutritionPage/NutritionPage";
import ExercisePage from "./Components/ExercisePage/ExercisePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage";
import ActivityPage from "./Components/ActivityPage/ActivityPage";
import SleepPage from "./Components/SleepPage/SleepPage";
import axios from "axios";
import { AuthContextProvider, useAuthContext } from "./contexts/auth";
import apiClient from "./services/apiClient";

export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { user, setUser } = useAuthContext();
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingExercise, setIsFetchingExercise] = useState(false);
  const [isFetchingSleep, setIsFetchingSleep] = useState(false);
  const [isFetchingActivity, setIsFetchingActivity] = useState(false);
  const [activity, setActivity] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) {
        setUser(data.user);
      }
      if (error) {
        setError(error);
      }
    };

    const token = localStorage.getItem("lifetracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, [setUser]);

  const addNutrition = (newNutrition) => {
    setNutrition((oldNutrition) => [newNutrition, ...oldNutrition]);
  };

  const addExercise = (newExercise) => {
    setExercise((oldExercise) => [newExercise, ...oldExercise]);
  };

  const addSleep = (newSleep) => {
    setSleep((oldSleep) => [newSleep, ...oldSleep]);
  };

  const handleLogout = async () => {
    await apiClient.logoutUser();
    setUser({});
    setError(null);
  };
  const handleNutritonForm = async () => {
    const fetchActivites = async () => {
      setIsFetchingActivity(true);

      const { data, error } = await apiClient.listActivities();
      if (data) {
        setActivity(data.activities);
      }
      if (error) {
        setError(error);
      }
      setIsFetchingActivity(false);
    };

    fetchActivites();
  };
  return (
    <div className="app">
      <React.Fragment>
        {
          <BrowserRouter>
            <Navbar
              handleLogout={handleLogout}
              isLogin={isLogin}
              user={user}
              setUser={setUser}
            />
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route
                path="/login"
                element={
                  <LoginPage
                    isLogin={isLogin}
                    user={user}
                    setUser={setUser}
                  ></LoginPage>
                }
              ></Route>
              <Route
                path="/register"
                element={
                  <RegistrationPage
                    user={user}
                    setUser={setUser}
                    isLogin={isLogin}
                  ></RegistrationPage>
                }
              ></Route>
              <Route
                path="/activity"
                element={
                  <ActivityPage
                    activity={activity}
                    isLogin={isLogin}
                    user={user}
                    setUser={setUser}
                  ></ActivityPage>
                }
              ></Route>
              <Route
                path="/nutrition/*"
                element={
                  <NutritionPage
                    handleNutritonForm={handleNutritonForm}
                    addNutrition={addNutrition}
                    nutrition={nutrition}
                    isLogin={isLogin}
                    user={user}
                    setUser={setUser}
                  ></NutritionPage>
                }
              ></Route>
              <Route
                path="/exercise/*"
                element={
                  <ExercisePage
                    exercise={exercise}
                    addExercise={addExercise}
                    user={user}
                    setUser={setUser}
                  ></ExercisePage>
                }
              ></Route>
              <Route
                path="/sleep/*"
                element={
                  <SleepPage
                    addSleep={addSleep}
                    sleep={sleep}
                    user={user}
                    setUser={setUser}
                  ></SleepPage>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        }
      </React.Fragment>
    </div>
  );
}
