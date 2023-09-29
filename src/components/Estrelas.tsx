import { useState } from "react";

export default function Estrelas() {
  // Estado para rastrear o número de estrelas selecionadas
  const [estrelasSelecionadas, setEstrelasSelecionadas] = useState(0);

  // Função para lidar com a seleção de uma estrela
  const selecionarEstrela = (quantidadeEstrelas: any) => {
    setEstrelasSelecionadas(quantidadeEstrelas);
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((indiceEstrela) => (
        <svg
          key={indiceEstrela}
          className={`w-4 h-4 cursor-pointer ${
            indiceEstrela <= estrelasSelecionadas
              ? "text-yellow-300"
              : "text-gray-300 dark:text-gray-500"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
          onClick={() => selecionarEstrela(indiceEstrela)}
        >
          {/* Conteúdo do ícone da estrela */}
        </svg>
      ))}
    </div>
  );
}