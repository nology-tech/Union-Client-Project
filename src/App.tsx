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
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const App = () => {
  const [dbData, setDbData] = useState<Event[]>([]);
  const [user, setUser] = useState<object>();
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const navigate = useNavigate();

  const getDbData = async () => {
    const data = await getEvents();
    setDbData(data as Event[]);
    setIsLoading(false);
  };

  useEffect(
    () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setIsLoading(false);
        } else {
          navigate("/splash");
          return;
        }
      });
      getDbData();
    }, // eslint-disable-next-line
    []
  );

  return (
    <>
      {isLoading === true ? (
        <LoadingSpinner />
      ) : (
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
              <Route
                path="/register"
                element={<Register setUser={setUser} />}
              />
            </>
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </>
  );
};

export default App;
