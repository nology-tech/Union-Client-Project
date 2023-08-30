import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import Nav from "./components/Nav/Nav";

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
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={""} />
        <Route path="/calendar" element={""} />
        <Route path="/about" element={""} />
      </Routes>
      <Nav />
    </>
  );
};

export default App;
