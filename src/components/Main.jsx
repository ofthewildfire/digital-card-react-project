import React from "react";
import Image from "./Image";
import Content from "./Content";
import Footer from "./Footer";

// Main Component that will hold all the other child components like Header, Content, Footer
const Main = () => {
  return (
    <main className="card--main">
      <Image />
      <Content />
      <Footer />
    </main>
  );
};

export default Main;
