// src/routes/Home/Home.js
import React from "react";
import "./Home.css";
import HeroImage from "../../components/HeroImage/HeroImage";
import backgroundImage from "../../assets/images/Cover-image.png";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <HeroImage />
      <ImageGallery />
    </div>
  );
};

export default Home;
