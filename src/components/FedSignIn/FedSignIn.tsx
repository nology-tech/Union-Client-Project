import "./FedSignIn.scss";
// import {
//   getAuth,
// //   getRedirectResult,
// //   signInWithRedirect,
//   GoogleAuthProvider,
// } from "firebase/auth";
import appleIcon from "../../assets/icons/apple.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import googleIcon from "../../assets/icons/google.svg";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

type FedSignInProps = {
  setUserId: (userId: string) => void;
};

// const providerGoogle = new GoogleAuthProvider();
// const auth = getAuth();

const FedSignIn = ({ setUserId }: FedSignInProps) => {
  //   const [signedIn, setSignedIn] = useState<boolean>(false);
  //   const navigate = useNavigate();

  //   const handleFedLogin = async () => {
  //     console.log("clicked");

  //     const user = await signInWithRedirect(auth, providerGoogle);
  //   };
  //   const handleResult = () => {
  //     const result = getRedirectResult(auth);
  //     if (result) {
  //       console.log(GoogleAuthProvider.credential(result));
  //       console.log(result.user);
  //     }
  //   };
  //   useEffect(() => {
  //     handleResult();
  //   }, [signedIn]);
  setUserId;

  return (
    <div className="fed-sign-in">
      <div className="fed-sign-in__top">
        <div className="fed-sign-in__line"></div>
        <div className="fed-sign-in__text">Sign in with</div>
        <div className="fed-sign-in__line"></div>
      </div>
      <div className="fed-sign-in__bottom">
        <div className="fed-sign-in__box">
          <img
            src={facebookIcon}
            alt="facebook sign in"
            className="fed-sign-in__image"
          />
        </div>
        <div className="fed-sign-in__box">
          <img
            src={googleIcon}
            alt="google sign in"
            className="fed-sign-in__image"
            // onClick={handleFedLogin}
          />
        </div>
        <div className="fed-sign-in__box">
          <img
            src={appleIcon}
            alt="apple sign in"
            className="fed-sign-in__image"
          />
        </div>
      </div>
    </div>
  );
};

export default FedSignIn;
