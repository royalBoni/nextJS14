import React from "react";
import styles from "./blog.module.css";
import PostCard from "../../components/postCard/PostCard";
import { getPosts } from "../../lib/data";

export type postType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

//FETCHING DATA WITH AN API
/* const getData = async () => {
  //{cache : "no-store will stop the default caching"} and {cache:"force-cache will cause cache"}, {next: {revalidate:3600}} will cause a refretch every one hour
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  }); // this by default will be cached which improves performance.
  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
}; */

const BlogPage = async () => {
  //FETCHING WITH AN API
  // const posts: postType[] = await getData();

  //FETCHING WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
