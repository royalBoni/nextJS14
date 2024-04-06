import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/20259609/pexels-photo-20259609/free-photo-of-two-elegant-women-in-maxi-dresses-and-headscarves-posing-in-a-studio.jpeg"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}></div>
    </div>
  );
};

export default SinglePostPage;
