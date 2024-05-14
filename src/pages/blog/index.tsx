import RootLayout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Blog() {
  const router = useRouter();

  console.log(router);
  return (
    <RootLayout>
      <div>Blog</div>
      <Link href="/">Home Menu</Link>
      <br />
      <button
        onClick={() => {
          router.push("/blog/123");
        }}
      >
        To Detail Blog
      </button>
    </RootLayout>
  );
}

export default Blog;
