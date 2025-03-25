"use client";
import styles from "@/app/styles/slides.module.css";
import Image from "next/image";
import backendImg from "@/app/assets/backend.jpg";
import dataImg from "@/app/assets/data.jpg";
import frontendImg from "@/app/assets/frontend.jpg";
import securityImg from "@/app/assets/security.jpg";
import { useState, useEffect } from "react";

const images = [
  { image: backendImg, alt: "Backend Developer Course" },
  { image: frontendImg, alt: "Frontend Developer course" },
  { image: dataImg, alt: "Data Science Course" },
  { image: securityImg, alt: "Syber Security Course" },
];

const SlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((img, index) => {
        return (
          <Image
            key={index}
            src={img.image}
            alt={img.alt}
            className={index === currentImageIndex ? styles.active : " "}
          />
        );
      })}
    </div>
  );
};
export default SlideShow;
