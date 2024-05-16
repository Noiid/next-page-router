import useAuth from "@/middleware/auth";
import React from "react";

function PrivatePage() {
  useAuth();
  return <div>Private Page</div>;
}

export default PrivatePage;
