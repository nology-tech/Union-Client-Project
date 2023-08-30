import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Form from "./components/Form/Form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      setUser(userData.user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userData.user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>{`Welcome ${user}`}</h1>
      <Form
        handleLogin={handleLogin}
        setEmail={setEmail}
        setPassword={setPassword}
        label="Welcome Back"
      />
      <Form
        handleLogin={handleRegister}
        setEmail={setEmail}
        setPassword={setPassword}
        label="Create An Account"
      />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
