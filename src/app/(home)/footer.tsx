import Link from "next/link";
import Image from "next/image";
import { aboutItems, moreItems } from "@/data/footer-items";
import { navItems } from "@/data/nav-items";

export function Footer() {
  const footerItmes = [
    { title: "Resources", items: navItems },
    {
      title: "More",
      items: moreItems,
    },
    {
      title: "About",
      items: aboutItems,
    },
  ];

  return (
    <footer className="border-t py-6 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8 md:flex-row md:justify-between">
          <Link className="mt-2" href="https://nextjs.org/" target="_blank">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={90}
              height={18}
              priority
            />
          </Link>
          {footerItmes.map((item, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <h4 className="font-bold">{item.title}</h4>
              {item.items.map((item, index) => (
                <Link
                  key={index}
                  className="text-muted-foreground"
                  href={item.href}
                  target="_blank"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 py-6 text-balance text-sm text-gray-500 text-left">
          <span>Built by </span>
          <Link
            className="underline"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.js
          </Link>
          <span>. The source code is available on </span>
          <Link
            className="underline"
            href="https://github.com/jyoketsu/next-template"
            target="_blank"
          >
            Github
          </Link>
          <span>.</span>
        </div>
      </div>
    </footer>
  );
}
