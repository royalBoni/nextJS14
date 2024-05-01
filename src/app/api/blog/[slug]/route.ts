"use server";
import { NextResponse } from "next/server";
import { connectToDb } from "../../../../lib/utils";
import { Post } from "../../../../lib/model";
import { slugType } from "../../../blog/[slug]/page";

export const GET = async (req: Request, { params }: { params: slugType }) => {
  const { slug } = params;

  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts");
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: slugType }
) => {
  const { slug } = params;

  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete posts");
  }
};
