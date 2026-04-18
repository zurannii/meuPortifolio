import "../styles/image-placeholder.css";

/**
 * ImagePlaceholder
 * Exibe um espaço reservado para imagens ainda não inseridas.
 *
 * Props:
 *  - label  {string}  Texto descritivo exibido no placeholder
 *  - dark   {boolean} Versão escura (para seções com fundo dark)
 *  - style  {object}  Estilos inline extras (ex: aspect-ratio personalizado)
 */
export default function ImagePlaceholder({ label = "Inserir imagem", dark = false, style = {} }) {
  return (
    <div
      className={`img-placeholder${dark ? " img-placeholder--dark" : ""}`}
      style={style}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="4" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 22l7-6 5 5 4-4 12 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
