import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { codeToHtml } from "shiki";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {children}
      </h1>
    ),

    pre: async ({ children, ...props }) => {
      const code = children.props.children;
      const html = await codeToHtml(code, {
        lang: children.props.className?.replace("language-", ""),
        theme: "github-dark",
      });

      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    },

    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
