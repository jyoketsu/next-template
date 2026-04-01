import { exampleAsideItems } from "@/data/aside-items";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const item = exampleAsideItems.find((item) => item.href.includes(`/${slug}`));

  let Post;
  try {
    // 尝试加载特定语言的 MDX 文件
    const module = await import(
      `@/app/[locale]/(home)/example/content/${item?.href.replace(
        "/example/",
        ""
      )}/page.${locale}.mdx`
    );
    Post = module.default;
  } catch (error) {
    // 如果特定语言文件不存在，回退到默认 page.mdx
    try {
      const module = await import(
        `@/app/[locale]/(home)/example/content/${item?.href.replace(
          "/example/",
          ""
        )}/page.mdx`
      );
      Post = module.default;
    } catch (error) {
      notFound();
    }
  }

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0 py-5">
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
