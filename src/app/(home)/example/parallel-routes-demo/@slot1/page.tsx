import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h1>slot1</h1>
      <Link href="/example/parallel-routes-demo/child">
        <Button>to child</Button>
      </Link>
    </div>
  );
}
