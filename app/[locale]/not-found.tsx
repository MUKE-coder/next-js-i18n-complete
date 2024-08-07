import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900">
      <h2 className="text-5xl">This Page does not Exist</h2>
      <Link href={"/"}>Go Back Home</Link>
    </div>
  );
}
