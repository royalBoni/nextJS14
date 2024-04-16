"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  console.log(pathName);
  console.log(q);
  //console.log(q); http://localhost:3002/navigationTest?q=3 this will output 3

  const handleClick = () => {
    console.log("you have been clicked to homepage");
    router.push("/");
    //router.back() this allows to go back to previous page on history stack
    //router.forward() this allows to go forward to previous page on history stack
    //router.replace("/") this doesnt add this visited page to history stack but rather replace it
    //router.refresh() refresh current page and refetch data and computations of the page
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here
      </Link>
      <button onClick={handleClick}>Click and redirect</button>
    </div>
  );
};

export default NavigationTestPage;
