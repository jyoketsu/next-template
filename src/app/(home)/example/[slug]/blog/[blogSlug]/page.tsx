import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; blogSlug: string }>;
}) {
  const { slug, blogSlug } = await params;

  let Post;
  try {
    const module = await import(
      `@/app/(home)/example/content/${slug}/content/${blogSlug}.mdx`
    );
    Post = module.default;
  } catch (error) {
    notFound();
  }

  return <Post />;
}
