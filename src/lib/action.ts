"use server";
import { connectToDb } from "./utils";
import { Post } from "./model";
import { revalidatePath } from "next/cache";
//use server must always be in an async function
export const addPost = async (formData: FormData) => {
  /*  const title = formData.get("title");
  const description = formData.get("description");
  const slug = formData.get("slug");
  const userId = formData.get("userId"); */

  const { title, description, slug, userId } = Object.fromEntries(formData);
  console.log(title, description, slug, userId);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    });

    await newPost.save();
    console.log("save to db");
    revalidatePath("/blog"); //refresh to show added data
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog"); //refresh to show added data
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};
