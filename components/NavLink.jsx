"use client";
import React from "react";
import Link from "next/link";
import classes from "@/components/header.module.css";
import { usePathname } from "next/navigation";
const NavLink = () => {
  const path = usePathname();
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith("/meals") ? classes.active : undefined}
          >
            Browser Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={path === "/community" ? classes.active : undefined}
          >
            Community
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLink;
