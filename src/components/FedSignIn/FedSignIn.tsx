import "./FedSignIn.scss";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import appleIcon from "../../assets/icons/apple.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import googleIcon from "../../assets/icons/google.svg";

const provider = new GoogleAuthProvider();
const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

const FedSignIn = () => {
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
