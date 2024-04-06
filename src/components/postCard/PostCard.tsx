import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/20259609/pexels-photo-20259609/free-photo-of-two-elegant-women-in-maxi-dresses-and-headscarves-posing-in-a-studio.jpeg"
            alt=""
            fill
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.buttom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          animi voluptatem dignissimos quod enim iusto, explicabo libero
          corporis cumque, quas esse accusamus quia. Nostrum, dolorum. Porro
          iste quasi officia in.
        </p>
        <Link className={styles.link} href={"/blog/post"}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
