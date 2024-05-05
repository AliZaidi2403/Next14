"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { ChangeEvent, startTransition, useState } from "react";
import { editSnippet } from "@/actions";
type Props = {
  snippet: Snippet;
};
export default function SnippetEditForm({ snippet }: Props) {
  const [code, setCode] = useState<string>(snippet.code);
  const handleChange = (value: string = "") => {
    setCode(value);
  };
  const handleSubmit = () => {
    startTransition(async () => {
      await editSnippet(snippet.id, code);
    });
  };
  return (
    <div>
      {" "}
      <Editor
        height="40vh"
        language="javascript"
        theme="vs-dark"
        defaultValue={code}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="p-2 border rounded"
      >
        Save
      </button>
    </div>
  );
}
