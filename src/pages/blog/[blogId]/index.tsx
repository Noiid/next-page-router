import { useRouter } from "next/router";
import React from "react";

const BlogDetail = () => {
  const router = useRouter();
  return <div>Blog Detail {router.query.blogId}</div>;
};

export default BlogDetail;
