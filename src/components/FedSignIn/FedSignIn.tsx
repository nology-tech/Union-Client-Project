import "./FedSignIn.scss";
import {
  getAuth,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import appleIcon from "../../assets/icons/apple.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import googleIcon from "../../assets/icons/google.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

type FedSignInProps = {
  setUserId: (userId: string) => void;
};

const providerGoogle = new GoogleAuthProvider();

const auth = getAuth();

const FedSignIn = ({ setUserId }: FedSignInProps) => {
  const [popUp, setPopUp] = useState<boolean>(false);

  const buttonObject = {
    width: "5rem",
    height: "3rem",
  };

  const handleNoLogin = () => {
    if (popUp) {
      setPopUp(false);
    } else {
      setPopUp(true);
    }
  };

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await signInWithRedirect(auth, providerGoogle);
  };

  const handleResult = async () => {
    try {
      const result = await getRedirectResult(auth);
      if (result?.user) {
        setUserId(result.user.uid);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      navigate("/splash");
    }
  };

  useEffect(
    () => {
      handleResult();
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="fed-sign-in">
      {popUp && (
        <div className="fed-sign-in__pop-up">
          This login option is in development
          <Button style={buttonObject} label="Back" onClick={handleNoLogin} />
        </div>
      )}
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
            onClick={handleNoLogin}
          />
        </div>
        <div className="fed-sign-in__box">
          <img
            src={googleIcon}
            alt="google sign in"
            className="fed-sign-in__image"
            onClick={handleGoogleLogin}
          />
        </div>
        <div className="fed-sign-in__box">
          <img
            src={appleIcon}
            alt="apple sign in"
            className="fed-sign-in__image"
            onClick={handleNoLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default FedSignIn;
