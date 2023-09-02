import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import ModalFuncionario from "@/components/modals/ModalFuncionario";
import Funcionario from "@/core/Funcionario";
import { useState } from "react";

export default function Aluno() {

    const [openModal, setOpenModal] = useState(false)
    const [funcionario, setFuncionario] = useState<Funcionario>(Funcionario.vazio())

    const funcionarios = [
        new Funcionario('Abner', "111111111", "2222222", "1111-1111", "email@gmail.com", "123", "1"),
        new Funcionario('Junio', "333333333", "4444444", "1111-1111", "email@gmail.com", "123", "2"),
        new Funcionario('Valdir', "555555555", "6666666", "1111-1111", "email@gmail.com", "123", "3")
    ]
    const dados = ['nome', 'cpf', 'rg']
    const cabecalho = ['Nome', 'CPF', 'RG', 'Ações']
    
    function funcionarioSelecionado(funcionario: Funcionario){
        setFuncionario(funcionario)
        setOpenModal(true)
    }
    function funcionarioExcluido(funcionario: Funcionario){
    }
    function salvarFuncionario(funcionario: Funcionario){
        setOpenModal(false)
    }
    function novoFuncionario(){
        setFuncionario(Funcionario.vazio())
        setOpenModal(true)
    }

    return (
        <LayoutUser divisoes usuario={'aluno'}>

            <section className="bg-white rounded-md w-auto h-auto m-2 mb-0 p-3">
                <div className="flex place-content-between">
                    <Titulo>Teste Aluno</Titulo>
                </div>
            </section>

            <section className="bg-white rounded-md w-auto h-5/6 m-2 mb-0">
                <Tabela objeto={funcionarios} 
                        propriedadesExibidas={dados}
                        cabecalho={cabecalho}
                        objetoSelecionado={funcionarioSelecionado}
                        objetoExcluido={funcionarioExcluido}></Tabela>
                <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Titulo'
                subtitulo='Subtitulo'><ModalFuncionario funcionario={funcionario} funcionarioMudou={salvarFuncionario}/></Modal>
            </section>
            
        </LayoutUser>
    )
}