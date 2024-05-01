import { NextResponse } from "next/server";
import { Post } from "../../../lib/model";
import { connectToDb } from "../../../lib/utils";

export const GET = async (req: Request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts");
  }
};
