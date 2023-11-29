import Material from "@/core/Material";
import {Botao} from "../Botao";
import DatePicker from "../DatePicker";
import EntradaPerfil from "../EntradaPerfil";
import { useState } from "react";
import Pagamento from "@/core/Pagamento";
import Aluno from "@/core/Aluno";
import Turma from "@/core/Turma";

interface ModalRootPagamentoProps {
    aluno: Aluno
    listaTurmas: Turma[]
}

export default function ModalRootPagamento(props: ModalRootPagamentoProps){

    const [pagamentos, setPagamentos] = useState([
        new Pagamento("idTeste1", "descrição1", 80, new Date(0), "Id1", false),
    ])
    const [idAluno, setIdAluno] = useState(props.aluno?.id ?? '')
    const [valor, setValor] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState(new Date(0))
    const id = props.aluno?.id

    function adicao(pagamentoNovo: Pagamento){
        setPagamentos([...pagamentos, pagamentoNovo])
    }

    return(
        <div className="text-black">
            <div className="flex flex-row pr-3 max-w-xl gap-3 overflow-x-auto">  
                {props.aluno.turma.map((turmaPagamento, index) => (
                    <div key={index} className="border rounded-md p-3 my-3 pb-4">

                        {props.listaTurmas.find(turma => turma.id === turmaPagamento)?.disciplina+" - " || "Disciplina não encontrada"}
                        {props.listaTurmas.find(turma => turma.id === turmaPagamento)?.nome || "Turma não encontrada"}

                        <section className="bg-blue-200 rounded-lg p-3 my-3">      
                            <div className="flex items-center gap-2">
                                <DatePicker titulo="Data" classname="text-white" classname2="text-black bg-white outline-none" setData={setData}/>
                                <EntradaPerfil texto="Valor" className="text-white" className2="bg-white rounded-xl text-black" tipo='number' placeholder="Valor do pagamento" valor={valor} valorMudou={setValor} min={0}/>
                            </div>     

                            <div className="bg-white rounded-lg">
                                <EntradaPerfil className="rounded-md p-3 w-full outline-none" className2={"bg-white focus:bg-white"} placeholder="Descrição do pagamento" valor={descricao} valorMudou={setDescricao}/>
                            </div>
                        </section>

                        <section className="flex place-content-end gap-10">
                            <Botao className="p-10 bg-blue-500" cor={"blue"}
                                    onClick={() => adicao(new Pagamento(props.aluno.id, descricao, valor, data, "id1", false))}>
                                {id? 'Alterar':'Confirmar'}
                            </Botao>
                        </section>

                    </div>
                ))}
            </div>

        </div>
    )
}