import { NAV_LINKS, SOCIAL_LINKS } from "../data/constants";
import "../styles/footer.css";

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__logo">PORTFOLIO</div>
          <p className="footer__desc">
            Elegância que não precisa pedir atenção — ela é percebida.
            Design estratégico que resolve, não apenas decora.
          </p>
        </div>

        <div className="footer__col">
          <h5>Navegação</h5>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button onClick={() => navigate(link)}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5>Redes Sociais</h5>
          <ul>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Portfolio. Design e código com atenção aos detalhes.</span>
        <div className="footer__legal">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
