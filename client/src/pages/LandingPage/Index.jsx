import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Faqs from "./Faqs";
import Features from "./Features";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import Testimonials from "../../components/Testimonials";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Footer />
    </>
  )
}

export default Index