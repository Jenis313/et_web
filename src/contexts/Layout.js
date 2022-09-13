import React, { useContext } from "react";
import Footer from "../components/Layouts/Footer/Footer.component";
import Header from "../components/Layouts/Header/Header.component";
import { UserContext } from "./User";

import Container from "@mui/material/Container";
import HeaderBar from "../components/Layouts/Header/Header.component";

// Can create context here if there is more than one layouts
// export const LayoutContext = React.createContext("layout");

// export const LayoutProvider = (props) => {

//   return (
//     <LayoutContext.Provider value={{ layout, setLayout }}>
//       <LayoutPlaceHolder>{props.children}</LayoutPlaceHolder>
//     </LayoutContext.Provider>
//   );
// };

const Layout = (props) => {
  const user = useContext(UserContext);
  // console.log("context user -> ", user);
  return (
    <div className="main-layout">
      <HeaderBar />
      <Container sx={{ marginTop: "72px" }} maxWidth="lg">
        {props.children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
