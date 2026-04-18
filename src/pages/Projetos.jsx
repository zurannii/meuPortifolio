import Footer from "../components/Footer";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { PROJETOS } from "../data/constants";
import "../styles/projetos.css";

/**
 * ProjetoCard — card individual de cada projeto.
 */
function ProjetoCard({ projeto }) {
  return (
    <article className="projeto fade-in">
      <div className="projeto__meta">
        <span className="projeto__num">{projeto.num}</span>
        <span className="projeto__year">{projeto.year}</span>
      </div>

      <div className="projeto__grid">
        {/* Wrapper de imagem adicionado para controle de grid e hover */}
        <div className="projeto__image-wrapper">
          <ImagePlaceholder label={projeto.imgLabel} style={{ aspectRatio: "4/3", width: "100%", objectFit: "cover" }} />
        </div>

        {/* Conteúdo */}
        <div className="projeto__content">
          <div className="projeto__tags">
            {projeto.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>

          <h2>{projeto.title}</h2>
          <p>{projeto.desc}</p>

          <p className="projeto__impacto-title">Impacto Mensurável</p>
          <ul className="projeto__impacto-list">
            {projeto.impacto.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {projeto.behance ? (
            <a
              className="projeto__link"
              href={projeto.behance}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no Behance →
            </a>
          ) : (
            <span className="projeto__link projeto__link--disabled">
              Em breve no Behance
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * Projetos — listagem de projetos do portfólio.
 */
export default function Projetos({ navigate }) {
  return (
    <div className="page">
      <header className="projetos__header">
        <div className="section-label fade-in">Portfólio Selecionado</div>
        <h1 className="fade-in delay-1">Projetos que definem padrões</h1>
        
        {/* Linha dourada inserida */}
        <div className="gold-line fade-in delay-1" />
        
        <p className="fade-in delay-2">
          Cada projeto representa meses de pesquisa, iteração e refinamento.
          O resultado não é apenas visual — é estratégico, mensurável e sustentável.
        </p>
      </header>

      <section className="projetos__lista">
        {PROJETOS.map((projeto) => (
          <ProjetoCard key={projeto.num} projeto={projeto} />
        ))}
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}