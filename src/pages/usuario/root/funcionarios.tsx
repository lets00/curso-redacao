import LayoutUser from "@/components/LayoutUser";
import TabelaRoot from "@/components/TabelaRoot";
import Titulo from "@/components/Titulo";
import { useState } from "react";
import Funcionario from "@/core/Funcionario";
import Modal from "@/components/Modal";
import ModalRootFuncionario from "@/components/modals/ModalRootFuncionario";

export default function RootFuncionarios() {

    const [openModal, setOpenModal] = useState(false)
    const [funcionario, setFuncionario] = useState<Funcionario>(Funcionario.vazio())

    const funcionarios = [
        new Funcionario('Abner', "111111111", "2222222", "1111-1111", "email@gmail.com", "123", "1", false),
        new Funcionario('Junio', "333333333", "4444444", "1111-1111", "email@gmail.com", "123", "2", false),
        new Funcionario('Valdir', "555555555", "6666666", "1111-1111", "email@gmail.com", "123", "3", false)
    ]
    const dados = ['nome','cpf', 'email']
    const cabecalho = ['Nome', 'CPF', 'Email', "Ações"]
    
    function funcionarioSelecionado(funcionario: Funcionario){
        setFuncionario(funcionario)
    }
    function funcionarioExcluido(funcionario: Funcionario){
    }
    function salvarFuncionario(funcionario: Funcionario){
        setOpenModal(true)
    }
    function novoFuncionario(){
        setFuncionario(Funcionario.vazio())
    }

    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between mb-10">
                <Titulo>Funcionários</Titulo>
            </div>
            <TabelaRoot objeto={funcionarios}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={funcionarioSelecionado}
                    objetoExcluido={funcionarioExcluido}
                    />

            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Gerenciar turma'
            ><ModalRootFuncionario funcionario={funcionario}/></Modal>

        </LayoutUser>
    )
}
