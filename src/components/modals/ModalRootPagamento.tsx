import Material from "@/core/Material";
import {Botao} from "../Botao";
import DatePicker from "../DatePicker";
import EntradaPerfil from "../EntradaPerfil";
import { useState } from "react";
import Pagamento from "@/core/Pagamento";

interface ModalRootPagamentoProps {
    objeto?: any
}

export default function ModalRootPagamento(props: ModalRootPagamentoProps){

    const [pagamentos, setPagamentos] = useState([
        new Pagamento("idTeste1", "descrição1", 80, new Date(0), "Id1", false),
    ])
    const [idAluno, setIdAluno] = useState(props.objeto?.id ?? '')
    const [valor, setValor] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState(new Date(0))
    const id = props.objeto?.id

    function adicao(pagamentoNovo: Pagamento){
        setPagamentos([...pagamentos, pagamentoNovo])
    }

    return(
        <div className="text-black">
            <section className="bg-blue-200 rounded-lg p-3 my-3">      
                <div className="flex items-center gap-2">
                    <DatePicker titulo="Data" classname="text-white" classname2="text-black bg-white outline-none" setData={setData}/>
                    <EntradaPerfil texto="Valor" className="text-white" className2="bg-white rounded-xl text-black" tipo='number' placeholder="Valor do pagamento" valorMudou={setValor}/>
                </div>     

                <div className="bg-white rounded-lg">
                    <EntradaPerfil className="rounded-md p-3 w-full outline-none" className2={"bg-white focus:bg-white"} placeholder="Descrição do pagamento" valorMudou={setDescricao}/>
                </div>
            </section>

            <section className="flex place-content-end gap-10">
                <Botao className="p-10 bg-blue-500" cor={"blue"}
                        onClick={() => adicao(new Pagamento(props.objeto?.id, descricao, valor, data, "id1", false))}>
                    {id? 'Alterar':'Confirmar'}
                </Botao>
            </section>
        </div>
    )
}