//"use client";

import React /* , { useState, useEffect } */ from "react";
import styles from "./contact.module.css";
import Image from "next/image";
/* import HydrationTest from "../../components/hydrationTest"; */ //rather use dynamic rendering

const ContactPage = () => {
  /* //using the use effect to prevent hydration.
  const [isClient, setIsClient] = useState(false);
  const a = Math.random();

 
  useEffect(() => setIsClient(true), []);
  console.log(a); */

  /*   const HydrationTestNoSSR:ComponentType<{}>= dynamic(()=>"../../components/hydrationTest", {ssr:false}) */
  /* const HydrationTestNoSSR = dynamic(
    () => import("../../components/hydrationTest"),
    { ssr: false }
  ); */
  /*  const a = Math.random();
  console.log(a); */
  return (
    <div className={styles.container}>
      {/* {isClient && <p>{a}</p>} */}
      {/* <HydrationTest /> */}
      {/* <HydrationTestNoSSR /> */}
      {/* <div suppressHydrationWarning>{a}</div> */}
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill />
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
