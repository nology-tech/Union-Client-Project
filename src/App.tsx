import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import "./styles/main.scss";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={""} />
        <Route path="/calendar" element={""} />
        <Route path="/about" element={""} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Nav />
    </>
  );
};

export default App;
