import Layout from "../../components/Layout/Layout";
import "./Account.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { MouseEvent } from "react";
import placeHolderPFP from "/src/assets/images/placeHolderPFP.svg";

const Account = () => {
  return (
    <Layout>
      <Header title={"Welcome Back"} />
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
            <h1 className="account-page__text-content--first-name">First Name</h1>
            <p className="account-page__text-content--name">Jugraj</p>
            <div className="account-page__text-content--box"></div>
            <h1 className="account-page__text-content--last-name">Last Name</h1>
            <p className="account-page__text-content--name">Singh</p>
            <div className="account-page__text-content--box"></div>
            <h1 className="account-page__text-content--email">
              Email
            </h1>
            <p className="account-page__text-content--email-address">
              testing@yahoo.co.uk
            </p>
            <div className="account-page__text-content--box"></div>
          </div>
        </div>
        <div className="sign-out-button">
          <Button
            label={"Sign Out"}
            onClick={function (
              event: MouseEvent<HTMLButtonElement, MouseEvent>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Account;
