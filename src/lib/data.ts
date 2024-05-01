import { postType } from "../app/blog/page";
import { Post } from "./model";
import { User } from "./model";
/* import { connectToDb } from "./utils"; */
import { connectToDb } from "./utils";
//TEMPORARY DATA

/* const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts: postType[] = [
  {
    id: 1,
    title: "post 1",
    body: "....",
    userId: 1,
  },
  { id: 2, title: "post 2", body: "....", userId: 1 },
  { id: 3, title: "post 3", body: "....", userId: 2 },
  { id: 4, title: "post 4", body: "....", userId: 2 },
]; */

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch posts");
  }
};

export const getPost = async (slug: string) => {
  //return await posts.find((post) => post.id === Number(id));
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch post");
  }
};

export const getUser = async (id: string) => {
  //return users.find((user) => user.id === Number(id));
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch user");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch users");
  }
};
