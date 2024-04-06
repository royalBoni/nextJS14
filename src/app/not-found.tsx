import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist</p>
      <Link href={"/"}>Return Home</Link>
    </>
  );
};

export default NotFound;
