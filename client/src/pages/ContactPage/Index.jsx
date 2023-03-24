import React from "react";
import EndBanner from "../../components/EndBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Contact from "./Contact";

const Index = () => {
  return (
    <section>
      <Navbar />
      <Header title="Contact Us" />
      <Contact />
      <EndBanner />
      <Footer />
    </section>
  );
};

export default Index;
