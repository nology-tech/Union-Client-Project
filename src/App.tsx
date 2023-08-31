import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import "./styles/main.scss";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import SplashPage from "./pages/SplashPage/SplashPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
  const [userId, setUserId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <Routes>
        {userId ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={""} />
            <Route path="/calendar" element={""} />
            <Route path="/about" element={""} />
            <Nav />
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
                  userId={userId}
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
