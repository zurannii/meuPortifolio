import Footer from "../components/Footer";
import { STATS } from "../data/constants";
import "../styles/home.css";

export default function Home({ navigate }) {
  return (
    <div className="page">
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero__content">
          <div className="section-label fade-in">UI/UX Designer & Desenvolvedora Full-Stack</div>

          <h1 className="fade-in delay-1">
            Design que não é só visto.<br />
            <em>É sentido, pensado e vivido.</em>
          </h1>
          
          <hr className="title-divider fade-in delay-1" />

          <h3 className="hero__subheadline fade-in delay-2">
            Transformando complexidade em experiências.
          </h3>

          <p className="hero__description fade-in delay-2">
            Sou designer UI/UX com visão de produto e base em desenvolvimento front-end. Minha abordagem vai além da interface: eu penso no impacto, no usuário e no negócio.
          </p>

          <div className="hero__btns fade-in delay-3">
            <button className="btn-primary" onClick={() => navigate("projetos")}>
              Ver Projetos
            </button>
            <button className="btn-secondary" onClick={() => navigate("contato")}>
              Iniciar Conversa
            </button>
          </div>
        </div>

        <div className="hero__stats fade-in delay-2">
          {STATS.map((stat) => (
            <div key={stat.num} className="hero__stat-item">
              <div className="hero__stat-num">{stat.num}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FILOSOFIA ─── */}
      <section className="philosophy">
        <div className="section-label">Filosofia de Design</div>
        <h2>Design não é estética. É decisão, intenção e impacto.</h2>
        <p>
          Eu não começo com telas, começo com perguntas. O que as pessoas
          realmente precisam? Onde está a dor? O que pode ser simplificado?
        </p>
        <p>
          Minha formação em design e tecnologia me permite conectar estratégia,
          interface e desenvolvimento. Eu não entrego apenas layouts, entrego
          soluções que funcionam. Porque no final… design não é sobre parecer
          bonito. É sobre fazer sentido.
        </p>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}
