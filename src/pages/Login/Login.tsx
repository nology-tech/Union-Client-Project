import "./Login.scss";
import Form from "../../components/Form/Form";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

type LoginProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  setUserId: (userId: string) => void;
};

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  setUserId,
}: LoginProps) => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setUserId(user.uid);
            navigate("/home");
            window.alert("Login Success");
          })
          .catch((error) => {
            window.alert(error.message);
          });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  return (
    <div>
      <Form
        handleLogin={handleLogin}
        setEmail={setEmail}
        setPassword={setPassword}
        label="Welcome Back"
      />
    </div>
  );
};

export default Login;

// test@test.com

// type LoginProps = {
//   email: string;
//   setEmail: (email: string) => void;
//   password: string;
//   setPassword: (password: string) => void;
//   setUserId: (userId: string) => void;
// };

// const Login = ({
//   email,
//   setEmail,
//   password,
//   setPassword,
//   setUserId,
// }: LoginProps) => {
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     setPersistence(auth, browserSessionPersistence);
//     try {
//       const userData = await signInWithEmailAndPassword(auth, email, password);
//       setUserId(userData.user.uid);
//       navigate("/home");
//       return userData;
//     } catch (error: unknown) {
//       if (error instanceof FirebaseError) {
//         console.error(error.code);
//       }
//     }
//   };

//   return (
//     <div>
//       <Form
//         handleLogin={handleLogin}
//         setEmail={setEmail}
//         setPassword={setPassword}
//         label="Welcome Back"
//       />
//     </div>
//   );
// };
