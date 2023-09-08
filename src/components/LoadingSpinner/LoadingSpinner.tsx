import { CSSProperties } from "react";
import "./LoadingSpinner.scss";
import CircleLoader from "react-spinners/ClipLoader";

const circleLoaderStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  marginTop: "40vh",
};

const LoadingSpinner = () => {
  return (
    <>
      <CircleLoader
        color="#B42004"
        loading
        size={150}
        cssOverride={circleLoaderStyles}
      />
      <h1 className="loading-text">Loading...</h1>
    </>
  );
};

export default LoadingSpinner;
