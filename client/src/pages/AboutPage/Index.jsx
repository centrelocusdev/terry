import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import WhatWeDo from "./WhatWeDo";
import EndBanner from "../../components/EndBanner";
import Numbers from "./Numbers";
import About from "./About";

const Index = () => {
  return (
    <section>
      <Navbar isWhite={true} />
      <Header title="About us" />
      <div className="md:p-16 p-8">
        <About />
        <Numbers />
        <WhatWeDo />
      </div>
      <EndBanner />
      <Footer />
    </section>
  );
};

export default Index;
