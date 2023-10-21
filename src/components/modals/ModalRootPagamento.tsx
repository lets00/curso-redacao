import Material from "@/core/Material";
import Botao from "../Botao";
import DatePicker from "../DatePicker";
import EntradaPerfil from "../EntradaPerfil";

interface ModalRootPagamentoProps {
    material?: Material
    funcionarioMudou?: (material: Material) => void
}

export default function ModalRootPagamento(props: ModalRootPagamentoProps){
    const id = props.material?.id

    return(
        <div className="text-black">
            <section className="bg-blue-200 rounded-lg p-3 my-3">      
                <div className="flex items-center gap-2">
                    <DatePicker titulo="Data" classname="text-white" classname2="text-black bg-white outline-none"/>
                    <EntradaPerfil texto="Valor" className="text-white" className2="bg-white rounded-xl text-black" tipo='number' placeholder="Valor do pagamento"/>
                </div>     

                <div className="bg-white rounded-lg">
                    <input type="text" className="rounded-md p-3 w-full outline-none" placeholder="Descrição do pagamento"/>
                </div>
            </section>

            <section className="flex place-content-end gap-10">
                <Botao className="p-10" cor={"blue"}
                        /*onClick={() => props.funcionarioMudou?.(new Funcionario(nome, cpf, id, false))}*/>
                    {id ? 'Alterar':'Confirmar'}</Botao>
            </section>
        </div>
    )
}