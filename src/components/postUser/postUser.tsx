import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "../../lib/data";

type UserType =
  | {
      id: number;
      name: string;
    }
  | undefined;

//FETCHIND DATA BY AN API
/* const getData = async (userId: number) => {
  //{cache : "no-store will stop the default caching"} and {cache:"force-cache will cause cache"}, {next: {revalidate:3600}} will cause a refretch every one hour
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      next: { revalidate: 3600 },
    }
  ); // this by default will be cached which improves performance.
  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};
 */
const PostUser = async ({ userId }: { userId: number }) => {
  // FETCHING DATA WITH API
  //const user = await getData(userId);

  //FETCHING USER WITHOUT AN API
  const user: UserType = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user?.name}</span>
    </div>
  );
};

export default PostUser;
