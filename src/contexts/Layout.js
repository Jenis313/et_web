import React from "react";
import Footer from "../components/Common/Footer/Footer.component";
import Header from "../components/Common/Header/Header.component";

const Layout = (props) => {
  return (
    <div className="main">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
