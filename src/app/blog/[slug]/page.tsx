import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/20259609/pexels-photo-20259609/free-photo-of-two-elegant-women-in-maxi-dresses-and-headscarves-posing-in-a-studio.jpeg"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/20259609/pexels-photo-20259609/free-photo-of-two-elegant-women-in-maxi-dresses-and-headscarves-posing-in-a-studio.jpeg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>James Michael</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius
          corrupti libero asperiores eligendi esse dolores cumque tenetur itaque
          molestiae, maxime cupiditate deserunt ratione vel, facilis ab
          obcaecati saepe accusamus.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
