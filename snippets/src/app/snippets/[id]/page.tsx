import { deleteSnippet } from "@/actions";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
type Props = {
  params: {
    id: string;
  };
};
export default async function page({ params: { id } }: Props) {
  const Id = +id;
  const snippet = await db.snippet.findUnique({
    where: {
      id: Id,
    },
  });
  if (!snippet) {
    notFound();
  }
  const delsnipId = deleteSnippet.bind(null, snippet.id);
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1> {snippet.title}</h1>
        <div className="flex">
          <Link href={`/snippets/${id}/edit`}>
            <button className="p-2 border rounded mx-4">Edit</button>
          </Link>
          <form action={delsnipId}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-300 border-gray-600">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => snippet.id.toString());
}
