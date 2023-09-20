import Material from "@/core/Material";
import Entrada from "../Entrada";
import { useState } from "react";
import Botao from "../Botao";

interface ModalFuncionarioProps {
    material: Material
    funcionarioMudou?: (material: Material) => void
}

export default function ModalAlunoMaterial(props: ModalFuncionarioProps){
    const id = props.material?.id

    return(
        <div className="text-black">
            {id ? (
                <Entrada somenteLeitura texto="Id" valor={id}/>
            ) : false}

            <Botao className="p-10"
                    /*onCLick={() => props.funcionarioMudou?.(new Funcionario(nome, cpf, id, false))}*/>
                {id ? 'Alterar':'Salvar'}</Botao>
        </div>
    )
}