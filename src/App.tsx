import { Route, Routes, useNavigate } from "react-router-dom";
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Account from "./pages/Account/Account";
import { getEvents } from "./utils/firebaseSnapshots";
import { Event } from "./types/types";

const App = () => {
  const [dbData, setDbData] = useState<Event[]>([]);

  useEffect(() => {
    getDbData();
  }, []);

  const getDbData = async () => {
    const data = await getEvents();
    setDbData(data as Event[]);
  };
  const [user, setUser] = useState<object>();

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(
    () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          navigate("/splash");
          return;
        }
      });
    }, // eslint-disable-next-line
    []
  );

  return (
    <>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
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
            <Route path="splash" element={<SplashPage />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
          </>
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
