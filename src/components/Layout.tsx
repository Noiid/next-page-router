import React, { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}
function RootLayout({ children }: RootProps) {
  return (
    <>
      <h1>Header</h1>
      <hr />
      {children}
      <hr />
      <h1>Footer</h1>
    </>
  );
}

export default RootLayout;
