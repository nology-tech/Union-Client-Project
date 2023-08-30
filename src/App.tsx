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
import { FirebaseError } from "firebase/app";

const App = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      setUser(userData.user);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code);
      }
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
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code);
      }
    }
  };

  return (
    <div>
      <h1>{`Welcome ${user}`}</h1>

      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
