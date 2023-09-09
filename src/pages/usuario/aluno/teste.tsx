import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import ModalFuncionario from "@/components/modals/ModalFuncionario";
import Funcionario from "@/core/Funcionario";
import { useState } from "react";

export default function TesteAluno() {

    const [openModal, setOpenModal] = useState(false)
    const [funcionario, setFuncionario] = useState<Funcionario>(Funcionario.vazio())

    const funcionarios = [
        new Funcionario('Abner', "111111111", "2222222", "1111-1111", "email@gmail.com", "123", "1", false),
        new Funcionario('Junio', "333333333", "4444444", "1111-1111", "email@gmail.com", "123", "2", false),
        new Funcionario('Valdir', "555555555", "6666666", "1111-1111", "email@gmail.com", "123", "3", false)
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
        <LayoutUser usuario={'aluno'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Teste Aluno</Titulo>
                <Botao onCLick={() => novoFuncionario()} className="mx-8 px-10">Alterar algo</Botao>
            </div>
            <Tabela objeto={funcionarios} 
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={funcionarioSelecionado}
                    objetoExcluido={funcionarioExcluido}></Tabela>
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Titulo'
            subtitulo='Subtitulo'><ModalFuncionario funcionario={funcionario} funcionarioMudou={salvarFuncionario}/></Modal>
        </LayoutUser>
    )
}