import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/actions/demo/mysql-demo";
import { AddButton } from "./add-button";
import { TableDemo } from "./table-demo";

export async function Demo() {
  return (
    <div>
      <AddButton />
      <TableDemo />
    </div>
  );
}
