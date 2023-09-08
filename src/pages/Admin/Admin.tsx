import Layout from "../../components/Layout/Layout";
import "./Admin.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import placeHolderPFP from "/src/assets/images/placeHolderPFP.svg";

const Admin = () => {
  const handleSignOut = () => {
    return;
  };

  return (
    <Layout>
      <Header title={"Admin"} />
      <div className="admin-page">
        <div className="admin-page__content">
          <div className="admin-page__content--photo">
            <img
              className="admin-page__content--image"
              src={placeHolderPFP}
              alt="your photo"
            />
          </div>
        </div>
        <div className="add-events-button">
          <Button label={"Add Events"} onClick={handleSignOut} />
        </div>
        <div className="sign-out-button">
          <Button label={"Sign Out"} onClick={handleSignOut} />
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
