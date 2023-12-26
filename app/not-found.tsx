"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4 py-20 text-white">
      <h2 className="text-xl font-medium"> Not Found</h2>
      <p>Could not find requested resource</p>
      <button className="shadow-md rounded-md py-1 px-4">
        <Link href="/">Redirecting Home</Link>
      </button>
    </div>
  );
}
