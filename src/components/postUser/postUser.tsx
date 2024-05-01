import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "../../lib/data";
import Image from "next/image";

type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
  img: string;
  isAdmin: boolean;
};

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
const PostUser = async ({ userId }: { userId: string }) => {
  // FETCHING DATA WITH API
  //const user = await getData(userId);

  //FETCHING USER WITHOUT AN API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user?.img ? `${user?.img}` : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.authorContainer}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
