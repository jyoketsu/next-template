import Link from "next/link";
import { exampleAsideItems } from "../../../data/aside-items";

export default function Example() {
  const items = exampleAsideItems.filter((item) => item.label !== "Examples");
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Examples
      </h1>
      <div className="my-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="not-prose bg-gray-0 border-1 group block space-y-2 rounded-md p-6 pt-5 transition-shadow duration-300 hover:shadow-lg"
          >
            <h3
              className="group-hover:text-active truncate text-lg font-medium leading-snug transition-colors duration-300"
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </h3>
            <div className="line-clamp-3 text-sm font-normal text-muted-foreground">
              {item.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
