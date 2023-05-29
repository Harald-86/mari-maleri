import { useState } from "react";
import Link from "next/link";

export default function Navbar(props) {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className="nav-container">
      <Link href="/">
        <p id="logo">
          Mari<span>m</span>aleri
        </p>
      </Link>
      <div
        onClick={ToggleClass}
        className={isActive ? "hamburger" : "hamburger lines-rotate"}
      >
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </div>
      <ul className={isActive ? "nav-links" : "hide"}>
        <li>
          <Link
            href="/malerier/malerier"
            onClick={ToggleClass}
            className="links"
          >
            Malerier
          </Link>
        </li>
        <li>
          <Link
            href="/galleri/galleriet"
            onClick={ToggleClass}
            className="links"
          >
            Galleri
          </Link>
        </li>
        <li>
          <Link href="/faq/faq" onClick={ToggleClass} className="links">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/om/ommeg" onClick={ToggleClass} className="links">
            Om meg
          </Link>
        </li>
        <li>
          <Link
            href="/spesial/spesial"
            onClick={ToggleClass}
            className="links spesialbestilling"
          >
            Spesial bestilling?
          </Link>
        </li>
      </ul>
    </nav>
  );
}
