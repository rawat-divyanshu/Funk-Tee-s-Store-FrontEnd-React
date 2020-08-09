import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CategoryBanner from "../Other Components/CategoryBanner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <CategoryBanner />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
