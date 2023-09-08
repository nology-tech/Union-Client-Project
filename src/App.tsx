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
import { getUsers } from "./utils/firebaseSnapshots";
import { UserType } from "../src/types/types";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dbData, setDbData] = useState<Event[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<UserType[]>([]);

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
        }
      });
      getDbData();
    }, // eslint-disable-next-line
    []
  );

  const getCurrentUid = auth.currentUser?.uid;
  const filteredUsers = users.filter((user) => user.UUID === getCurrentUid);
  const isAdmin = filteredUsers.length > 0 && filteredUsers[0].isAdmin;

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData as UserType[]);
    };

    fetchUsers();
  }, []);

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
              {isAdmin ? (
                <Route path="/admin" element={<Admin setUser={setUser} />} />
              ) : (
                <Route
                  path="/account"
                  element={<Account setUser={setUser} user={user} />}
                />
              )}
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
