import { exampleAsideItems } from "@/data/aside-items";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = exampleAsideItems.find((item) => item.href.includes(`/${slug}`));

  let Post;
  try {
    const module = await import(
      `@/app/(home)/example/content/${item?.href.replace(
        "/example/",
        ""
      )}/page.mdx`
    );
    Post = module.default;
  } catch (error) {
    notFound(); // 当文件不存在时触发 404
  }

  return (
    <div>
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 py-5">
        {item?.label}
      </h1>
      <p className="text-base text-muted-foreground mb-5">
        {item?.description}
      </p>
      <div className="prose dark:prose-invert">
        <Post />
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = exampleAsideItems.find((item) => item.href.includes(`/${slug}`));

  return {
    title: item?.label,
    description: item?.description,
  };
}
