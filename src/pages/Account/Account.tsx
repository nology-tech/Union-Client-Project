import Layout from "../../components/Layout/Layout";
import "./Account.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { auth } from "../../firebase";
import { User, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/firebaseSnapshots";
import { useEffect, useState } from "react";
import placeHolderPFP from "/src/assets/images/placeHolderPFP.svg";
import InputBox from "../../components/InputBox/InputBox";

type AccountProps = {
  setUser: (user: User | null) => void;
};

const Account = ({ setUser }: AccountProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();
  const userId = auth.currentUser?.uid as string;

  useEffect(() => {
    const fetchDisplayName = async () => {
      let user = await getUser(userId);
      const firstName = user?.firstName;
      const lastName = user?.lastName;
      const email = user?.email;
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
    };
    fetchDisplayName();
  }, [userId]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);

      const navigateToSplash = () => {
        navigate("/splash");
      };

      navigateToSplash();
    } catch (error) {
      console.error("Sign-out error", error);
    }
  };

  const capitalizeFirstCharacter = (name: string) => {
    const firstCharacter = name.slice(0, 1).toUpperCase();
    const restOfName = name.substring(1, name.length);
    const combinedName = `${firstCharacter}${restOfName}`;
    return combinedName;
  };

  const handleInput = () => {
    return;
  };

  return (
    <Layout>
      <Header
        title={`Welcome Back ${capitalizeFirstCharacter(
          firstName
        )} ${capitalizeFirstCharacter(lastName)}`}
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
              inputPlaceholder={capitalizeFirstCharacter(firstName)}
              inputType={"text"}
              handleInput={handleInput}
            />
            <div className="account-page__text-content--box"></div>

            <InputBox
              label={"Last Name"}
              inputPlaceholder={capitalizeFirstCharacter(lastName)}
              inputType={"text"}
              handleInput={handleInput}
            />
            <div className="account-page__text-content--box"></div>

            <InputBox
              label={"Email"}
              inputPlaceholder={email}
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
