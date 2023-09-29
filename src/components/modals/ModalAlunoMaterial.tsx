import Material from "@/core/Material";
import Botao from "../Botao";
import Estrelas from "../Estrelas";

interface ModalFuncionarioProps {
    material: Material
    funcionarioMudou?: (material: Material) => void
}

export default function ModalAlunoMaterial(props: ModalFuncionarioProps){
    const id = props.material?.id

    return(
        <div className="text-black">
            <section className="bg-pink-200 rounded-lg p-3 my-3">      
                <div className="flex items-center mb-3 gap-1">
                    <div className=" flex justify-center items-center
                            rounded-full p-4 ml-4 mr-0 bg-white"/>
                    <h4 className="ml-1">Nome do Aluno</h4>
                </div>     

                <div className="bg-white rounded-lg">
                    <input type="text" className="rounded-md p-3 w-full outline-none" placeholder="Insira aqui sua dúvida e/ou comentário"/>
                </div>
            </section>

            <section className="flex place-content-between gap-10">
                <div className="flex justify-center bg-pink-400 rounded-lg p-2 pl-3 text-white font-bold font-Montserrant">
                    <h3>Avaliação</h3>
                    <Estrelas></Estrelas>
                </div>
                <Botao className="p-10"
                        /*onCLick={() => props.funcionarioMudou?.(new Funcionario(nome, cpf, id, false))}*/>
                    {id ? 'Alterar':'Enviar'}</Botao>
            </section>
        </div>
    )
}