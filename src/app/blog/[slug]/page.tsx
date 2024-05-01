import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "../../../components/postUser/postUser";
import { getPost } from "../../../lib/data";
import { postType } from "../page";

export type slugType = {
  slug: string;
};

/* export const generateMetadata = async ({ params }: { params: slugType }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}; */ // dynamic SEO

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

//FETCHING DATA WITH INBUILT API

const getData = async (param: slugType) => {
  const { slug } = param;
  // {cache : "no-store will stop the default caching"} and {cache:"force-cache will cause cache"}, {next: {revalidate:3600}} will cause a refretch every one hour
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    /* next: { revalidate: 3600 }, */ cache: "no-store",
  }); // this by default will be cached which improves performance.
  if (!res.ok) {
    throw new Error("something went wrong");
  }

  const resJson = await res.json();
  return resJson;
};

const SinglePostPage = async ({ params }: { params: slugType }) => {
  //FETCHING WITH AN API
  //const post: postType = await getData(slug);

  const post: postType = await getData(params);

  //FETCHING WITHOUT AN API
  /* const post: postType = await getPost(slug); */

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src={
            post?.img
              ? `${post?.img}`
              : "https://images.pexels.com/photos/20259609/pexels-photo-20259609/free-photo-of-two-elegant-women-in-maxi-dresses-and-headscarves-posing-in-a-studio.jpeg"
          }
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>loading</div>}>
            <PostUser userId={post?.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {JSON.stringify(post?.createdAt)?.slice(1, 11)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
