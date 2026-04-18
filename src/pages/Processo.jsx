import Footer from "../components/Footer";
import { ETAPAS, PRINCIPIOS, TOOLS } from "../data/constants";
import "../styles/processo.css";

export default function Processo({ navigate }) {
  return (
    <div className="page">
      {/* ─── HEADER ─── */}
      <header className="processo__header">
        <div className="section-label fade-in">Metodologia de Trabalho</div>
        <h1 className="fade-in delay-1">Processo é estratégia</h1>
        
        {/* Linha divisória logo abaixo do título */}
        <div className="gold-line fade-in delay-1" />
        
        <p className="fade-in delay-2">
          Design eficaz não acontece por acidente. É resultado de método rigoroso,
          questionamento constante e refinamento iterativo. Este é o caminho que
          percorro em cada projeto.
        </p>
      </header>

      {/* ─── ETAPAS ─── */}
      <section className="etapas fade-in delay-3">
        {ETAPAS.map((etapa) => (
          <div className="etapa" key={etapa.num}>
            <div className="etapa__num">{etapa.num}</div>

            <div className="etapa__content">
              <h3>{etapa.title}</h3>
              <p>{etapa.desc}</p>
            </div>

            <div className="etapa__entregas">
              <p className="etapa__entregas-label">Entregas</p>
              <ul>
                {etapa.entregas.map((entrega) => (
                  <li key={entrega}>{entrega}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* ─── PRINCÍPIOS ─── */}
      <section className="principios">
        <div className="section-label">Fundamentos</div>
        <h2>Princípios que guiam decisões</h2>
        <div className="principios__grid">
          {PRINCIPIOS.map((p) => (
            <div className="principio" key={p.title}>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FERRAMENTAS ─── */}
      <section className="tools">
        <div className="section-label">Ferramentas & Stack</div>
        <h2>Tecnologia a serviço da visão</h2>
        <p>
          Ferramenta não define qualidade, mas a escolha certa acelera execução.
          Domínio técnico permite materializar ideias sem limitações.
        </p>
        <div className="tools__grid">
          {TOOLS.map((tool) => (
            <span className="tool-chip" key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}