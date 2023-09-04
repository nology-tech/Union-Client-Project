import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import "./styles/main.scss";
import { useState, useEffect } from "react";
import SplashPage from "./pages/SplashPage/SplashPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Events from "./pages/Events/Events";
import { mockEvents } from "./data/mockEvents";
import About from "./pages/About/About";
import Calendar from "./pages/Calendar/Calendar";
import { getDocs, collection, doc } from "firebase/firestore";
import db from "./firebase";

const App = () => {
  const [userId, setUserId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [eventsList, setEventsList] = useState([]);

  const eventsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEventList = async () => {
      try {
        const data = await getDocs(eventsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log({ filteredData });
      } catch (err) {
        console.error(err);
      }
    };
    getEventList();
  }, []);

  return (
    <>
      <Routes>
        {userId ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events eventData={mockEvents} />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/about" element={<About />} />
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
