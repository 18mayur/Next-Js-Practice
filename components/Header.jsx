import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "@/components/header.module.css";
import Image from "next/image";
import MainBackground from "@/components/MainBackground";
import NavLink from "@/components/NavLink";

const Header = () => {
  return (
    <>
      <MainBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="logo" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browser Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Meals</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
