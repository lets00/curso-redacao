import { useState } from "react";

interface SelectProps{
    seletor: any
    titulo: string
    classname?: string
    aoClicar?: (objeto: any) => void
}

export default function Select(props: SelectProps) {
    const [value, setValue] = useState("");

    function aoAlterar(e:any){
      setValue(e.target.value);
      props.aoClicar?.(e.target.value)
    }
    
    return (
      <div className="text-black">
        <h3 className="m-5 mb-2 mt-3 font-semibold">{props.titulo}</h3>
        <select
            className={`ml-6 p-2 mb-4 w-fit mr-4 bg-blue-400 rounded-lg text-white font-semibold outline-0 ${props.classname}`}
            value={value}
            onChange={(e) => {
            aoAlterar(e);
          }}
        >
            {props.seletor.map((linha: any, index: any) => (
                <option key={index} value={linha}>{linha}</option>
            ))}
        </select>
      </div>
    );
  }