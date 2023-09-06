import Layout from "../../components/Layout/Layout";
import "./Account.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { getUser } from "../../utils/firebaseSnapshots";
import { auth } from "../../firebase";

const Account = () => {
  const userId = auth.currentUser?.uid as string;
  return (
    <Layout>
      <Header title={"Welcome Back"} subTitle="Name goes here..." />
      <Button label="Sign out" onClick={() => getUser(userId)} />
      <div className="account-page">
        <h1>Page under development.</h1>
      </div>
    </Layout>
  );
};

export default Account;
