import "./FedSignIn.scss";
import {
  getAuth,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import appleIcon from "../../assets/icons/apple.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import googleIcon from "../../assets/icons/google.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type FedSignInProps = {
  setUserId: (userId: string) => void;
};

const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerApple = new OAuthProvider(`apple.com`);
const auth = getAuth();

const FedSignIn = ({ setUserId }: FedSignInProps) => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await signInWithRedirect(auth, providerGoogle);
  };

  const handleFacebookLogin = async () => {
    await signInWithRedirect(auth, providerFacebook);
  };

  const handleAppleLogin = async () => {
    await signInWithRedirect(auth, providerApple);
  };

  const handleResult = async () => {
    const result = await getRedirectResult(auth);
    if (result?.user) {
      setUserId(result.user.uid);
      navigate("/home");
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
            onClick={handleFacebookLogin}
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
            onClick={handleAppleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default FedSignIn;
