import Footer from "../components/Footer";
import { CANAIS, MODALIDADES, TIPOS_PROJETO, ORCAMENTOS } from "../data/constants";
import "../styles/contato.css";

export default function Contato({ navigate }) {
  return (
    <div className="page">
      {/* ─── HEADER ─── */}
      <header className="contato__header">
        <div className="section-label fade-in">Contato</div>
        <h1 className="fade-in delay-1">Vamos criar algo excepcional</h1>
        <div className="gold-line fade-in delay-1" />
        <p className="fade-in delay-2">
          Procura um designer que entende tanto de estética quanto de estratégia?
          Que questiona, propõe e entrega resultados mensuráveis? Vamos conversar.
        </p>
      </header>

      {/* ─── CANAIS + DISPONIBILIDADE ─── */}
      <div className="contato__grid">
        <div className="fade-in delay-3">
          <div className="section-label">Canais de Comunicação</div>

          {CANAIS.map((canal) => (
            <div className="canal__item" key={canal.name}>
              <div>
                <div className="canal__name">{canal.name}</div>
                <a className="canal__value" href={canal.href} target="_blank" rel="noopener noreferrer">
                  {canal.value}
                </a>
              </div>
              <div className="canal__tag">{canal.tag}</div>
            </div>
          ))}

          <div className="disponibilidade">
            <p className="disponibilidade__status">
              <span className="dot-online" />
              Disponível para novos projetos
            </p>
            <div className="disponibilidade__label">Modalidades</div>
            <ul className="disponibilidade__list">
              {MODALIDADES.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          {/* ─── DOWNLOAD CV (PT e EN) ─── */}
          <div className="cv-download">
            <div className="section-label">Currículo / Resume</div>
            <div className="cv-download__links">
              {/* Lembre-se de colocar os arquivos reais na pasta public */}
              <a href="/cv-pt.pdf" download className="cv-link">
                <span>PT</span> Baixar CV
              </a>
              <a href="/cv-en.pdf" download className="cv-link">
                <span>EN</span> Download
              </a>
            </div>
          </div>
        </div>

        <div className="fade-in delay-3" style={{ paddingTop: 0 }}>
          {/* ─── FORMULÁRIO FORMSPREE ─── */}
          <section className="form-section">
            <div className="section-label">Enviar Mensagem</div>
            <h2>Conte sobre seu projeto</h2>
            <p>Quanto mais contexto você fornecer, melhor poderei avaliar o fit e a abordagem ideal.</p>

            {/* Formulário apontando para o seu Formspree */}
            <form action="https://formspree.io/f/xvzdawrj" method="POST" className="form-container">
              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="nome">Nome *</label>
                  <input id="nome" name="nome" type="text" placeholder="Seu nome completo" required />
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="empresa">Empresa</label>
                <input id="empresa" name="empresa" type="text" placeholder="Nome da empresa ou projeto" />
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="tipo">Tipo de Projeto</label>
                  <select id="tipo" name="tipo">
                    <option value="">Selecione</option>
                    {TIPOS_PROJETO.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form__group">
                  <label htmlFor="orcamento">Orçamento Estimado</label>
                  <select id="orcamento" name="orcamento">
                    <option value="">Selecione</option>
                    {ORCAMENTOS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Descreva seu projeto, objetivos e prazos. Quanto mais detalhes, melhor."
                  required
                />
              </div>

              <div className="form__submit">
                <button type="submit" className="btn-primary">
                  Enviar Mensagem
                </button>
                <p className="form__privacy">
                  Respondo em até 24h úteis. Seus dados serão usados apenas para responder esta solicitação.
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}