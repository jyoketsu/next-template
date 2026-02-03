import { stacks } from "@/data/stacks";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full p-5">
      <div className="w-full my-20">
        {/* 
          bg-clip-text：将背景（如渐变、图片等）裁剪到文字的形状上，从而实现文字背景效果。
          text-transparent：使文字透明，以显示背景渐变。 
        */}
        <h1 className="text-6xl text-center font-bold tracking-tighter bg-linear-to-r from-primary to-primary/40 bg-clip-text text-transparent leading-16 p-6">
          Next.js Template
        </h1>
        <div className="text-muted-foreground text-base md:text-xl py-10 px-8">
          <p className=" max-w-3xl m-auto leading-7 md:leading-9 text-center">
            A production-ready Next.js 15+ starter template with modern UI
            components, advanced features, and optimized tooling. Perfect for
            building performant web applications with TypeScript and App Router
            architecture.
          </p>
        </div>

        <h2 className="mt-20 text-3xl text-center font-semibold tracking-tight transition-colors p-6 bg-linear-to-r from-primary to-primary/40 bg-clip-text text-transparent">
          Core Stack
        </h2>
        <div className="my-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stacks.map((stack, index) => (
            <Link
              key={index}
              href={stack.link}
              target="_blank"
              className="p-6 border-2 bg-muted/30 hover:bg-muted hover:shadow-lg rounded-[12px] flex flex-col transition-all duration-300"
            >
              <div className="w-full mb-10 h-10 flex items-center">
                <Image
                  src={`/logo/${stack.logo}`}
                  alt={`${stack.name} logo`}
                  className={`max-h-10 object-contain object-left ${stack.logoClass} origin-left`}
                  width={1000}
                  height={0}
                  priority
                />
              </div>
              <div className="text-primary text-xl font-semibold h-7.5 flex items-center mb-3 space-x-2">
                <span>{stack.name}</span>
                <ArrowUpRight className="text-muted-foreground" />
              </div>
              <div className="text-sm text-muted-foreground leading-6">
                {stack.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
