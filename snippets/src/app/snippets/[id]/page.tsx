import { db } from "@/db";
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

  return <div> {snippet.title}</div>;
}
