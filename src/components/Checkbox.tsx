import React, { useState } from "react";

interface CheckBoxProps {
  titulo?: string;
  opcoes: any;
  setOpcao?: (opcoes: string[]) => void;
}

export default function Checkbox(props: CheckBoxProps) {
  const [opcoesMarcadas, setOpcoesMarcadas] = useState<string[]>([]);

  const handleCheckboxChange = (opcao: string) => {
    const opcoesAtualizadas = [...opcoesMarcadas]; // Crie uma cópia do estado atual

    if (opcoesAtualizadas.includes(opcao)) {
      // Se a opção já estiver marcada, desmarque-a
      const index = opcoesAtualizadas.indexOf(opcao);
      opcoesAtualizadas.splice(index, 1);
    } else {
      // Se a opção não estiver marcada, marque-a
      opcoesAtualizadas.push(opcao);
    }

    setOpcoesMarcadas(opcoesAtualizadas); // Atualize o estado

    if (props.setOpcao) {
      props.setOpcao(opcoesAtualizadas);
    }
  };

  return (
    <div className="text-black">
      <h3 className="font-LeagueSpartan ml-9 mt-2">{props.titulo}</h3>
      <section className="flex flex-row items-center gap-6 ml-10">
        {props.opcoes.map((opcao:any, index:any) => (
          <div key={index} className="flex items-center">
            <input
              id={`checkbox-${index}`}
              type="checkbox"
              value={opcao}
              name={`checkbox-${index}`}
              className="w-4 h-4"
              onChange={() => handleCheckboxChange(opcao)}
              checked={opcoesMarcadas.includes(opcao)} // Marcar ou desmarcar com base no estado
            />
            <label htmlFor={`checkbox-${index}`} className="ml-2 text-sm text-black">
              {opcao}
            </label>
          </div>
        ))}
      </section>
    </div>
  );
}
