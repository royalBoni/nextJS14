import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "../../../components/postUser/postUser";
import { getPost } from "../../../lib/data";
import { postType } from "../page";

type slugType = {
  slug: number;
};
//FETCHING DATA WITH AN API
/*
const getData = async (id: number) => {
  // {cache : "no-store will stop the default caching"} and {cache:"force-cache will cause cache"}, {next: {revalidate:3600}} will cause a refretch every one hour
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
  }); // this by default will be cached which improves performance.
  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
}; */

const SinglePostPage = async ({ params }: { params: slugType }) => {
  const { slug } = params;

  //FETCHING WITH AN API
  //const post: postType = await getData(slug);

  //FETCHING WITHOUT AN API
  const post: postType | undefined = await getPost(slug);

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
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/20259609/pexels-photo-20259609/free-photo-of-two-elegant-women-in-maxi-dresses-and-headscarves-posing-in-a-studio.jpeg"
            alt=""
            width={50}
            height={50}
          />

          <Suspense fallback={<div>loading</div>}>
            <PostUser userId={post?.userId ? post.userId : 0} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
