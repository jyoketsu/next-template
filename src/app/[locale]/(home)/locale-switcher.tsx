"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

const locales = [
  { code: "en", label: "English" },
  { code: "zh", label: "简体中文" },
  { code: "ja", label: "日本語" },
];

export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    // 移除当前 locale 前缀
    let pathnameWithoutLocale = pathname.replace(/^\/(zh|ja)/, '');

    // 确保路径以 / 开头
    if (!pathnameWithoutLocale.startsWith('/')) {
      pathnameWithoutLocale = '/' + pathnameWithoutLocale;
    }

    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-8">
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => switchLocale(locale.code)}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
