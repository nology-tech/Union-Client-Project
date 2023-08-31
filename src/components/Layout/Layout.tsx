import { ReactNode } from "react";
import Nav from "../Nav/Nav";
import "./Layout.scss";

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
