"use client";

import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();
  return (
    <button className="absolute top-2 right-2" onClick={() => router.back()}>
      <XIcon className="size-[18px]"/>
    </button>
  );
}
