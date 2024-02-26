"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
const Links = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={()=> setIsOpen((prev)=> !prev)}>Menu</button>
      {isOpen && (
        <div className={styles.mobileLikns}>
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
