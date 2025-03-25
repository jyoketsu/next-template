"use server";

import { cache } from "react";
import prisma from "@/lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";

export async function getAllPosts() {
  try {
    const allPosts = await prisma.post.findMany();
    return allPosts;
  } catch (error) {
    return { message: "Failed to fetch posts" };
  }
}

export async function addPost(data: FormData) {
  try {
    await prisma.post.create({
      data: {
        title: data.get("title") as string,
        content: data.get("content") as string,
      },
    });
    revalidatePath("/example/mysql");
  } catch (error) {
    return "Failed to add post";
  }
}

export async function editPost(id: number, data: FormData) {
  try {
    await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: data.get("title") as string,
        content: data.get("content") as string,
      },
    });
    revalidatePath("/example/mysql");
  } catch (error) {
    return "Failed to edit post";
  }
}

export async function deletePost(id: number) {
  try {
    await prisma.post.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/example/mysql");
  } catch (error) {
    return "Failed to delete post";
  }
}

export async function getPost(id: number) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return post;
  } catch (error) {
    return { message: "Failed to fetch post" };
  }
}
