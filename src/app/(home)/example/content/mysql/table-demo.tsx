import { getAllPosts } from "@/lib/actions/demo/mysql-demo";
import { TableData } from "./table-data";

export async function TableDemo() {
  const res: any = await getAllPosts();

  return <TableData posts={res} />;
}
