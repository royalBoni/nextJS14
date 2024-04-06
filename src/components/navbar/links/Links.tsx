"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

export type linkType = {
  title: string;
  path: string;
};

const links: linkType[] = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link: linkType) => (
          <NavLink item={link} />
        ))}
        {!session ? (
          <NavLink item={{ title: "login", path: "/login" }} />
        ) : (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}

            <button className={styles.logout}>logout</button>
          </>
        )}
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
