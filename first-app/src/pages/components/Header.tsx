import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="topHeader">
      <nav className="topNav">
        <ul className="topUl">
          <li className="topHome">
            <Link href="/">Home</Link>
          </li>
          <li className="topAbout">
            <Link href="/about">About</Link>
          </li>
          <li className="topContact">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
