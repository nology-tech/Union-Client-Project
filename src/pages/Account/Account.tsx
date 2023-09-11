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

type AccountProps = {
  setUser: (user: User | null) => void;
  user: User;
  isAdmin: boolean;
};

const Account = ({ setUser, user, isAdmin }: AccountProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisplayName = async () => {
      const currentUser = await getUser(user.uid);
      if (currentUser) {
        const firstName = currentUser.firstName;
        const lastName = currentUser.lastName;
        const email = currentUser.email;
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
      }
    };
    fetchDisplayName();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/splash");
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

  return (
    <Layout isAdmin={isAdmin}>
      <Header
        title={`Welcome Back, ${capitalizeFirstCharacter(
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
            <div className="account-page__text-content--box">
              <p>{capitalizeFirstCharacter(firstName)}</p>
            </div>

            <div className="account-page__text-content--box">
              <p>{capitalizeFirstCharacter(lastName)}</p>
            </div>

            <div className="account-page__text-content--box">
              <p>{email}</p>
            </div>
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
