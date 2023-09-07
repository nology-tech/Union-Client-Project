import Layout from "../../components/Layout/Layout";
import "./Account.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/firebaseSnapshots";
import { User } from "../../types/types";
import { useEffect, useState } from "react";

const Account = () => {
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
      let user = await getUser(displayName);
      console.log(user?.firstName);
      // await signOut(auth);
      // navigate("/");
      // console.log("clicked sign out");
      // console.log(auth.currentUser);
    } catch (error) {
      // An error happened.
      console.error("Sign-out error", error);
    }
  };

  return (
    <Layout>
      <Header title={"Welcome Back"} subTitle={displayName} />
      <Button label="Sign out" onClick={handleSignOut} />
      <div className="account-page">
        <h1>Page under development.</h1>
      </div>
    </Layout>
  );
};

export default Account;
