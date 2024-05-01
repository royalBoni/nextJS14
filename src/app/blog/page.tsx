import React from "react";
import styles from "./blog.module.css";
import PostCard from "../../components/postCard/PostCard";
import { getPosts } from "../../lib/data";

export type postType = {
  slug: string;
  userId: string;
  title: string;
  description: string;
  img?: string | null | undefined;
  createdAt?: Date;
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

//FETCHING DATA WITH AN API WE CREATED
const getData = async () => {
  //{cache : "no-store will stop the default caching"} and {cache:"force-cache will cause cache"}, {next: {revalidate:3600}} will cause a refretch every one hour
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  }); // this by default will be cached which improves performance.
  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  //FETCHING WITH AN API
  // const posts: postType[] = await getData();

  const posts: postType[] = await getData();

  //FETCHING WITHOUT AN API
  /*  const posts: postType[] = await getPosts(); */
  return (
    <div className={styles.container}>
      {posts?.map((post) => (
        <div className={styles.post} key={post.slug}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
