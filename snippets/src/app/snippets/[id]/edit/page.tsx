import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/app/components/SnippetEditForm";
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
  return <SnippetEditForm snippet={snippet} />;
}
