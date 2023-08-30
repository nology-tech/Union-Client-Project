import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div>
      <Form />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
