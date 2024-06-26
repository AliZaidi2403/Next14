"use client";
import { createSnippet } from "@/actions";
import { useFormState } from "react-dom";
export default function Page() {
  const [formState, action] = useFormState(createSnippet, { message: "" });
  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create A Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
            type="text"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        {formState.message ? (
          <div className="p-2 my-2 border rounded bg-red-300 border-red-800 ">
            {formState.message}
          </div>
        ) : null}
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
