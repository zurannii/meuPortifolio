import Footer from "../components/Footer";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { ESPECIALIDADES, VALORES, TRAJETORIA } from "../data/constants";
import "../styles/sobre.css";

export default function Sobre({ navigate }) {
  return (
    <div className="page">
      {/* ─── HERO BIO ─── */}
      <section className="sobre__hero">
        <div>
          <div className="section-label fade-in">Sobre</div>
          <h1 className="fade-in delay-1">Designer que pensa como estrategista</h1>
          <div className="gold-line" />
          <p className="fade-in delay-2">
            A jornada entre o design e o código começou com a vontade de não apenas
            desenhar telas bonitas, mas construir sistemas que realmente funcionem.
            Sou a Roberta (ou apenas Rob), UI/UX Designer e Desenvolvedora Full-Stack,
            apaixonada por criar experiências digitais acessíveis, funcionais e de alto impacto.
          </p>
          <p className="fade-in delay-3">
            Meu trabalho acontece exatamente na intersecção entre a estética, guiada
            por heurísticas de usabilidade e design systems, e a engenharia estruturada,
            navegando do React ao Node.js. Acredito que a tecnologia e o design devem
            servir a um propósito real.
          </p>
          <p className="fade-in delay-3">
            Já atuei em projetos multidisciplinares intensos: desde o design de sistemas
            de rastreamento marinho com IA e soluções de acessibilidade para o mercado
            de luxo, até o redesign estratégico de plataformas de alta volumetria.
          </p>
        </div>

        <div className="fade-in delay-2">
        <img 
          src="/robrob.png" 
          alt="Roberta" 
          className="sobre__img" 
         />
        </div>
      </section>

      {/* ─── ESPECIALIDADES ─── */}
      <section className="especialidades">
        <div className="section-label">Especialização</div>
        <div className="chips">
          {ESPECIALIDADES.map((item) => (
            <span className="chip" key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* ─── VALORES ─── */}
      <section className="valores">
        <div className="section-label">Valores</div>
        <h2>O que move o trabalho</h2>
        <div className="valores__grid">
          {VALORES.map((valor) => (
            <div className="valor" key={valor.title}>
              <h4>{valor.title}</h4>
              <p>{valor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRAJETÓRIA ─── */}
      <section className="trajetoria">
        <div className="section-label">Trajetória</div>
        <h2>Experiência construída progressivamente</h2>
        <ul className="timeline">
          {TRAJETORIA.map((item) => (
            <li className="timeline__item" key={item.year}>
              <div className="timeline__year">{item.year}</div>
              <div className="timeline__body">
                <div className="timeline__role">{item.role}</div>
                <div className="timeline__company">{item.company}</div>
                <div className="timeline__desc">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── RECONHECIMENTO ─── */}
     {/*  <section className="reconhecimento">
        <div className="section-label">Reconhecimento</div>
        <p>
          Trabalhos apresentados em publicações de design como Awwwards,
          CSS Design Awards e Behance. Palestrante em eventos locais sobre
          design systems e metodologia de UX.
        </p>
        <p>
          Prêmios são validação, mas o reconhecimento mais importante vem de
          clientes que retornam, usuários satisfeitos e produtos que realmente funcionam.
        </p>
      </section> */}

      <Footer navigate={navigate} />
    </div>
  );
}
