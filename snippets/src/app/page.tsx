import { db } from "@/db";
import Link from "next/link";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.title}`}
        key={snippet.id}
        className="flex justify-between items-center p-2 border rounded"
      >
        {snippet.title}
        <div>View</div>
      </Link>
    );
  });
  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <h1 className="text-xl font-bold"> Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className=" flex gap-2 flex-col">{renderSnippets}</div>
    </div>
  );
}
