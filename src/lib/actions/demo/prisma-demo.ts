"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
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
    const session = await auth();
    if (!session?.user) {
      return "Please login first";
    }

    // Check if the total number of posts exceeds 10
    const postCount = await prisma.post.count();
    if (postCount >= 10) {
      return "Cannot add more than 10 posts";
    }

    await prisma.post.create({
      data: {
        title: data.get("title") as string,
        content: data.get("content") as string,
        published: false,
        authorId: Number(session.user.id),
      },
    });
    revalidatePath("/example/prisma-postgres");
  } catch (error) {
    return "Failed to add post";
  }
}

export async function editPost(id: number, data: FormData) {
  try {
    const session = await auth();
    if (!session?.user) {
      return "Please login first";
    }
    await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: data.get("title") as string,
        content: data.get("content") as string,
        authorId: Number(session.user.id),
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
