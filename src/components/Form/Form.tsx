import { useState } from "react";
import "./Form.scss";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [user, setUser] = useState({});

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // const handleInput = async (event) => {
  //   setEmail(event.currentTarget.value);
  //   setPassword(event.currentTarget.value);

  //   signInWithEmailAndPassword(auth, email, password);

  //   // Signed in
  //   const userCredential = await signInWithEmailAndPassword(
  //     auth,
  //     email,
  //     password
  //   );
  //   const user = userCredential.user;
  //   // ...
  //   console.log(user);
  // };

  // console.log(email, password);

  return (
    <div>
      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label htmlFor="password">password</label>
      <input
        type="text"
        id="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button type="submit" onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
};

export default Form;
