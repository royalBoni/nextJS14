import { postType } from "../app/blog/page";

//TEMPORARY DATA

const users = [
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
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id: number) => {
  return await posts.find((post) => post.id === Number(id));
};

export const getUser = async (id: number) => {
  return users.find((user) => user.id === Number(id));
};
