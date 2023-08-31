import { ReactNode } from "react";
import "./Layout.scss";
import Nav from "../Nav/Nav";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {children}
      <Nav />
    </div>
  );
};

export default Layout;
