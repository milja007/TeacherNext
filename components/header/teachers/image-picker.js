"use client";

import Image from "next/image";
import styles from "@/app/styles/image-picker.module.css";
//U OVOJ SITUACIJI DIJELI INPUT
// REF ZA UPLOAD SA BUTTON UPLOAD IMAGE
import { useRef, useState } from "react";

const ImagePicker = ({ name, label }) => {
  const [image, setImage] = useState();
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleImage = (e) => {
    //files su stored in arrayu ne file nego files
    const pic = e.target.files[0];
    if (!pic) {
      return;
    }
    //OVO DOLJE JE STANDARD PROCEDURE COPY PASTE ZA INACE NAVIKNUT CES SE
    const fileReader = new FileReader();
    //readasdataurl-convert image in displayable format by
    //using URL of the image
    fileReader.readAsDataURL(pic);
    //make sure image appears on the screen
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!image && <p>Nothing Selected</p>}
          {image && <Image src={image} alt="Selected Image" fill />}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          //AKO CES KORISTIT PAZI NA image/jpeg ne jpg sjebalo me vec
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={handleImage}
        />
        <button className={styles.button} type="button" onClick={handleClick}>
          Upload Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
