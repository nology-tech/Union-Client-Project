import Layout from "../../components/Layout/Layout";
import "./Account.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/firebaseSnapshots";
import { useEffect, useState } from "react";
import placeHolderPFP from "/src/assets/images/placeHolderPFP.svg";
import InputBox from "../../components/InputBox/InputBox";

type AccountProps = {
  setUser: (userId: object) => void;
};

const Account = ({ setUser }: AccountProps) => {
  const [displayName, setDisplayName] = useState("");

  const userId = auth.currentUser?.uid as string;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisplayName = async () => {
      let user = await getUser(userId);
      let displayName = `${user?.firstName} ${user?.lastName}`;
      setDisplayName(displayName);
    };
    fetchDisplayName();
  }, [userId]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser({});
      navigate("/splash");
      console.log("clicked sign out");
      console.log(auth.currentUser);
    } catch (error) {
      // An error happened.
      console.error("Sign-out error", error);
    }
  };

  const handleInput = () => {
    return;
  };

  return (
    <Layout>
      <Header
        title={`Welcome Back ${displayName}`}
        subTitle="Manage Your Account"
      />
      <div className="account-page">
        <div className="account-page__content">
          <div className="account-page__content--photo">
            <img
              className="account-page__content--image"
              src={placeHolderPFP}
              alt="your photo"
            />
          </div>
          <div className="account-page__text-content">
            <InputBox
              label={"First Name"}
              inputPlaceholder="Jugraj"
              inputType={"text"}
              handleInput={handleInput}
            />
            <div className="account-page__text-content--box"></div>

            <InputBox
              label={"Last Name"}
              inputPlaceholder="Singh"
              inputType={"text"}
              handleInput={handleInput}
            />
            <div className="account-page__text-content--box"></div>

            <InputBox
              label={"Email"}
              inputPlaceholder="example@gmail.com"
              inputType={"email"}
              handleInput={handleInput}
            />
            <div className="account-page__text-content--box"></div>
          </div>
        </div>
        <div className="sign-out-button">
          <Button label={"Sign Out"} onClick={handleSignOut} />
        </div>
      </div>
    </Layout>
  );
};
export default Account;
