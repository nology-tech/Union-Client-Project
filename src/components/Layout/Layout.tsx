import { ReactNode } from "react";
import Nav from "../Nav/Nav";
import "./Layout.scss";

type LayoutProps = {
  children: ReactNode;
  isAdmin: boolean;
};

const Layout = ({ children, isAdmin }: LayoutProps) => {
  return (
    <div className="layout">
      {children}
      <Nav isAdmin={isAdmin} />
    </div>
  );
};

export default Layout;
