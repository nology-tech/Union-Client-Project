import "./FedSignIn.scss";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

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
        <div className="fed-sign-in__facebook">Facebook</div>
        <div className="fed-sign-in__google">Gmail</div>
        <div className="fed-sign-in__apple">Apple</div>
      </div>
    </div>
  );
};

export default FedSignIn;
