"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <nav className="main">
      <div className="logo">Filtro</div>
      
      {/* Desktop Links */}
      <ul className="gap">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/components/Card">Explore Us</Link>
        </li>
        <li>
          <Link href="/components/Brand">Brands</Link>
        </li>
        <li>
          <Link href="/components/Contact">Contact Us</Link>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="btn-group">
        <Link href="/components/Login">
          <button className="btn1">Sign Up/Login</button>
        </Link>
        <button className="btn1">Get the App</button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hiddenOnDesktop">
        <button onClick={toggleMenu} className="btn1">
          <GiHamburgerMenu size={24} />
        </button>
      </div>

    </nav>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <ul className="list-non">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/components/Card">Explore Us</Link>
          </li>
          <li>
            <Link href="/components/Brand">Brands</Link>
          </li>
          <li>
            <Link href="/components/Contact">Contact Us</Link>
          </li>
        </ul>
        <ul className="m-login">
          <Link href="/components/Login">
            <button className="btn1">Sign Up/Login</button>
          </Link>
          <Link href="/">
            <button className="btn1">Get the App</button>
          </Link>
        </ul>
      </div>
    </>
   
  );
};

export default NavBar;
