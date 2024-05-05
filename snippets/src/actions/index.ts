"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export async function editSnippet(id: number, code: string) {
  const snippet = await db.snippet.update({
    where: {
      id,
    },
    data: {
      code: code,
    },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath("/");
  redirect("/");
}
export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title");
  const code = formData.get("code");
  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title length must be atleast 3.",
    };
  }
  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "Code length must be atleast 10.",
    };
  }

  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  if (!snippet) {
    throw new Error("Error creating new snippet, Try again later!!");
  }
  // redirecting user back to root route
  revalidatePath("/");
  redirect("/");
}
