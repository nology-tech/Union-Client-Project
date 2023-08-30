import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Nav from "./components/Nav/Nav";
import SplashPage from "./pages/SplashPage/SplashPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={""} />
        <Route path="/calendar" element={""} />
        <Route path="/about" element={""} />
      </Routes>
      {window.location.pathname !== "/" && <Nav />}
    </>
  );
};

export default App;
