import Layout from "../../components/Layout/Layout";
import "./Account.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import placeHolderPFP from "/src/assets/images/placeHolderPFP.svg";
import InputBox from "../../components/InputBox/InputBox";
import { ChangeEvent } from "react";

const Account = () => {
  const handleSignOut = () => {
    return;
  };

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
            <div className="testing">
            <InputBox label={"First Name"} inputPlaceholder="Jugraj" inputType={"text"} handleInput={function (event: ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            } } />
            </div>
            <div className="account-page__text-content--box"></div>
            
            <InputBox label={"Last Name"} inputPlaceholder="Singh" inputType={"text"} handleInput={function (event: ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            } } />
            <div className="account-page__text-content--box"></div>
            
            <InputBox label={"Email"} inputPlaceholder="example@gmail.com" inputType={"email"} handleInput={function (event: ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            } } />
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
