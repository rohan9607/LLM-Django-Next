import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

type props = {
  children : ReactElement
}

const Layout = ({ children } : props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
