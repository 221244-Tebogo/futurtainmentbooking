import React from "react";
import "./HeroImage.css";

export default function HeroImage() {
  return (
    <header className="hero-container">
      <div className="p-5 text-center bg-image hero-image-container">
        <div className="overlay"></div>
        <div className="mask">
          <div className="hero-text-container">
            <h1 className="mb-3 main-heading">Find Your Furry Soulmate</h1>
            <p className="mb-3">
              Welcome to PawPrints, where finding your perfect furry companion
              is just a swipe away! Our innovative platform connects animal
              lovers with their ideal pets through a fun and intuitive matching
              experience. Whether you're seeking a loyal canine companion, a
              cuddly feline friend, or a quirky critter to complete your family,
              PawPrint has you covered. Start swiping today and embark on a
              heartwarming journey to find your forever fur-ever friend!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
