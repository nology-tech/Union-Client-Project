import Layout from "../../components/Layout/Layout";
import "./Admin.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import placeHolderPFP from "/src/assets/images/placeHolderPFP.svg";
import { User, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

type AdminProps = {
  setUser: (user: User | null) => void;
  user: User;
};

const Admin = ({ setUser, user }: AdminProps) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/splash");
    } catch (error) {
      console.error("Sign-out error", error);
    }
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
