import React from "react";
import Banner from "./Banner";
import CategoryBanner from "../Other Components/CategoryBanner";
import ContactUs from "./ContactUs";
import Base from "./Base";
import "../tailwind.output.css";

const Home = () => {
  return (
    <Base>
      <Banner />
      <CategoryBanner />
      <ContactUs />
    </Base>
  );
};

export default Home;
