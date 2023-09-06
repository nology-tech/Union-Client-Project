import Layout from "../../components/Layout/Layout";
import "./Account.scss";
import Header from "../../components/Header/Header";

const Account = () => {

  return (
    <Layout>
      <Header
        title={"Welcome Back"}
        subTitle="Name goes here..."
        
        />
      <div className="account-page">
        <h1>Page under development.</h1>
      </div>
    </Layout>
  );
};

export default Account;
