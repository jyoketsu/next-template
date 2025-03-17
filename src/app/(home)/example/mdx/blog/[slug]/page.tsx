export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(
    `@/app/(home)/example/mdx/content/${slug}.mdx`
  );

  return <Post />;
}
