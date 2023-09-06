import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import "./styles/main.scss";
import { useState, useEffect } from "react";
import SplashPage from "./pages/SplashPage/SplashPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Events from "./pages/Events/Events";
import About from "./pages/About/About";
import CalendarPage from "./pages/Calendar/Calendar";
import Account from "./pages/Account/Account";

const App = () => {
  const [userId, setUserId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dbData, setDbData] = useState<Event[]>([]);

  useEffect(() => {
    getDbData();
  }, []);

  const getDbData = async () => {
    const data = await getEvents();
    setDbData(data as Event[]);
  };

  return (
    <>
      <Routes>
        {userId ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events eventData={dbData} />} />
            <Route
              path="/calendar"
              element={<CalendarPage eventData={dbData} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
          </>
        ) : (
          <>
            <Route path="/" element={<SplashPage />} />
            <Route
              path="/login"
              element={
                <Login
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  setUserId={setUserId}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  setUserId={setUserId}
                />
              }
            />
          </>
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
