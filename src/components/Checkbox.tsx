interface CheckBoxProps {
    titulo: string;
    opcoes: string[];
    setOpcao?: (opcao: string) => void;
  }
  
  export default function Checkbox(props: CheckBoxProps) {
    const handleCheckboxChange = (opcao: string) => {
      if (props.setOpcao) {
        props.setOpcao(opcao);
      }
    };
  
    return (
      <div className="text-black">
        <h3 className="font-LeagueSpartan ml-9 mt-2">{props.titulo}</h3>
        <section className="flex flex-row items-center gap-6 ml-10">
          {props.opcoes.map((opcao, index) => (
            <div key={index} className="flex items-center">
              <input
                id={`checkbox-${index}`}
                type="checkbox"
                value={opcao}
                name={`checkbox-${index}`}
                className="w-4 h-4"
                onChange={() => handleCheckboxChange(opcao)}
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
  