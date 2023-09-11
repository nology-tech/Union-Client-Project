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
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import Account from "./pages/Account/Account";
import Admin from "./pages/Admin/Admin";
import { getEvents } from "./utils/firebaseSnapshots";
import { Event } from "./types/types";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import { getUser } from "./utils/firebaseSnapshots";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dbData, setDbData] = useState<Event[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [updateData, setUpdateData] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user) {
        const currentUser = await getUser(user.uid);
        console.log(currentUser);

        if (currentUser && currentUser.isAdmin) {
          setIsAdmin(currentUser.isAdmin);
          console.log(isAdmin);
        } else {
          setIsAdmin(false);
        }
      }
    };
    fetchUserDetails();
  }, [user, isAdmin]);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (updateData) {
      getDbData();
      setUpdateData(false);
    }
  }, [updateData]);

  const handleNewEvent = () => {
    setUpdateData(true);
  };
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
              <Route path="/" element={<Home isAdmin={isAdmin} />} />
              <Route
                path="/events"
                element={<Events eventData={dbData} isAdmin={isAdmin} />}
              />
              <Route
                path="/calendar"
                element={
                  <CalendarPage
                    userId={user.uid}
                    eventData={dbData}
                    isAdmin={isAdmin}
                  />
                }
              />
              <Route path="/about" element={<About isAdmin={isAdmin} />} />
              {isAdmin ? (
                <Route
                  path="/admin"
                  element={<Admin setUser={setUser} isAdmin={isAdmin} />}
                />
              ) : (
                <Route
                  path="/account"
                  element={
                    <Account setUser={setUser} user={user} isAdmin={isAdmin} />
                  }
                />
              )}
              <Route
                path="/create-event"
                element={<CreateEvent handleNewEvent={handleNewEvent} />}
              />
              {/* 
                THIS IS A TEMPORARY FIX TO HANDLE A REDIRECTING ISSUE WITH FEDERATED SIGN IN.

                ISSUE: ONCE REDIRECTED TO SIGN IN WITH GOOGLE THE APP RELOADS
                       WE NOW HAVE A USER MEANING THAT THE /login & /register ROUTES DID NOT EXIST 
                       SO WOULD NOT BE DISPLAYED. 

                FIX:   ADD BOTH ROUTES TO BOTH TERNARY STATEMENTS
                       - WHEN A USER IS SIGNED IN & ISN'T SIGNED IN
              */}
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route
                path="/register"
                element={<Register setUser={setUser} />}
              />
            </>
          ) : (
            <>
              <Route path="/splash" element={<SplashPage />} />
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
