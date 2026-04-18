import { useNav } from "./hooks/useNav";
import Nav from "./components/Nav";

import Home     from "./pages/Home";
import Projetos from "./pages/Projetos";
import Processo from "./pages/Processo";
import Sobre    from "./pages/Sobre";
import Contato  from "./pages/Contato";
import NotFound from "./pages/NotFound";

import "./styles/global.css";

const PAGES = {
  home:     Home,
  projetos: Projetos,
  processo: Processo,
  sobre:    Sobre,
  contato:  Contato,
};

export default function App() {
  const { page, navigate } = useNav("home");
  const Page = PAGES[page] ?? NotFound;

  return (
    <>
      <Nav page={page} navigate={navigate} />
      <Page navigate={navigate} />
    </>
  );
}
