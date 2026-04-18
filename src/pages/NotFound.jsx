import Footer from "../components/Footer";
import "../styles/not-found.css";

/**
 * NotFound — página 404 elegante para rotas/links inexistentes.
 */
export default function NotFound({ navigate }) {
  return (
    <div className="page">
      <div className="not-found">
        <div className="not-found__num">404</div>
        <h2>Página não encontrada</h2>
        <p>
          Esta página não existe ou ainda não está disponível.
          Mas há muito a explorar por aqui.
        </p>
        <button className="btn-primary" onClick={() => navigate("home")}>
          ← Voltar ao início
        </button>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
