// HeroImage.jsx

import React from "react";
import "./HeroImage.css";

export default function HeroImage() {
  return (
    <header className="hero-container">
      <div
        className="p-5 text-center bg-image hero-image-container"
        style={{
          backgroundImage:
            "url('https://www.suninternational.com/content/dam/approved/carnival-city/events/carn-rory-petzer-may-2024.jpg.sunimage.1920.525.jpg')",
        }}
      >
        <div className="overlay"></div> {/* Add this line for overlay */}
        <div className="mask">
          <div className="hero-container">
            <div className="hero-text-container">
              <h1 className="mb-3">Welcome to Futurtainment!</h1>
              <p className="mb-3">
                Discover and book your next great experience with Futurtainment!
                Our platform offers a wide range of events, from concerts to
                theater performances, and everything in between. Easily find and
                book events that match your interests. Start exploring today and
                never miss out on the fun!
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
