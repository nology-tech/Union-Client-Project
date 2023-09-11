import { ReactNode } from "react";
import Nav from "../Nav/Nav";
import "./Layout.scss";
import { User } from "firebase/auth";

type LayoutProps = {
  children: ReactNode;
  user: User;
};

const Layout = ({ children, user }: LayoutProps) => {
  return (
    <div className="layout">
      {children}
      <Nav user={user} />
    </div>
  );
};

export default Layout;
