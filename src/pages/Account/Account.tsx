import Layout from "../../components/Layout/Layout";
import "./Account.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/firebaseSnapshots";
import { User } from "../../types/types";

const Account = () => {
  const userId = auth.currentUser?.uid as string;
  const user = getUser(userId);
  console.log(user);

  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      console.log(auth.currentUser);
      await signOut(auth);
      navigate("/");
      console.log("clicked sign out");
      console.log(auth.currentUser);
    } catch (error) {
      // An error happened.
      console.error("Sign-out error", error);
    }
  };

  return (
    <Layout>
      <Header title={"Welcome Back"} subTitle={`hbbz`} />
      <Button label="Sign out" onClick={handleSignOut} />
      <div className="account-page">
        <h1>Page under development.</h1>
      </div>
    </Layout>
  );
};

export default Account;
