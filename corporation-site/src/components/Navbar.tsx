import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between  p-8 ">
        <Link className="font-bond text-3xl" href="/">
          Corporation
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>

          <Link href="/reliability">reliability</Link>

          <Link href="/scale">scale</Link>
        </div>
      </nav>
    </div>
  );
}
