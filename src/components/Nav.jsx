import { useState } from "react";
import { NAV_LINKS } from "../data/constants";
import "../styles/nav.css";

/**
 * Nav — barra de navegação fixa com suporte a mobile.
 *
 * Props:
 *  - page     {string}   Página atual
 *  - navigate {function} Função de navegação do hook useNav
 */
export default function Nav({ page, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (target) => {
    navigate(target);
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <button className="nav__logo" onClick={() => go("home")}>
        PORTFOLIO
      </button>

      <ul className={`nav__links${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              className={page === link ? "active" : ""}
              onClick={() => go(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="nav__hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Abrir menu"
      >
        <span style={menuOpen ? { transform: "rotate(45deg) translateY(6.5px)" } : {}} />
        <span style={menuOpen ? { opacity: 0 } : {}} />
        <span style={menuOpen ? { transform: "rotate(-45deg) translateY(-6.5px)" } : {}} />
      </button>
    </nav>
  );
}
