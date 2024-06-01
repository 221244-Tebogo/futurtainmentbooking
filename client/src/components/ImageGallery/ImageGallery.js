import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import dogIcon from "../../assets/icons/dog.svg";
import catIcon from "../../assets/icons/cat.svg";
import rabbitIcon from "../../assets/icons/rabbit.svg";
import birdIcon from "../../assets/icons/bird.svg";

const ImageGallery = () => {
  const images = [
    { name: "Dog", icon: dogIcon, link: "/petmatching/dog" },
    { name: "Cat", icon: catIcon, link: "/petmatching/cat" },
    { name: "Rabbit", icon: rabbitIcon, link: "/petmatching/rabbit" },
    { name: "Bird", icon: birdIcon, link: "/petmatching/bird" },
  ];

  return (
    <div className="singleLineImageContainer">
      {images.map((image, index) => (
        <div
          key={index}
          className="image"
          style={{ backgroundImage: `url(${image.icon})` }}
        >
          <Link to={image.link} className="image-link">
            {/* <div className="icon-name">{image.name}</div> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
