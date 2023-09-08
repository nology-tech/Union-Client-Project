import Layout from "../../components/Layout/Layout";
import "./Admin.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import placeHolderPFP from "/src/assets/images/placeHolderPFP.svg";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    return;
  };

  const createEvent = () => {
    navigate("/create-event");
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
          <Button label={"Add Events"} onClick={createEvent} />
        </div>
        <div className="sign-out-button">
          <Button label={"Sign Out"} onClick={handleSignOut} />
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
