import React, { useContext } from "react";
import Footer from "../components/Layouts/Footer/Footer.component";
import Header from "../components/Layouts/Header/Header.component";
import { UserContext } from "./User";

import Container from "@mui/material/Container";

const Layout = (props) => {
  const user = useContext(UserContext);
  console.log("context user -> ", user);
  return (
    <div className="main-layout">
      <Header />
      <Container maxWidth="lg">{props.children}</Container>

      <Footer />
    </div>
  );
};

export default Layout;
