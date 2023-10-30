import LayoutUser from "@/components/LayoutUser";
import TabelaRoot from "@/components/TabelaRoot";
import Titulo from "@/components/Titulo";
import { useState } from "react";
import Funcionario from "@/core/Funcionario";
import Modal from "@/components/Modal";
import ModalRootFuncionario from "@/components/modals/ModalRootFuncionario";
import ModalExcluir from "@/components/modals/ModalExcluir";


export default function RootFuncionarios() {



    const funcionarios = [
        new Funcionario('Abner', "111111111", "2222222", "1111-1111", "email@gmail.com", "123", "1", false),
        new Funcionario('Junio', "333333333", "4444444", "1111-1111", "email@gmail.com", "123", "2", false),
        new Funcionario('Valdir', "555555555", "6666666", "1111-1111", "email@gmail.com", "123", "3", false)
    ]
    const dados = ['nome','cpf', 'email']
    const cabecalho = ['Nome', 'CPF', 'Email', "Ações"]

    const [openModal, setOpenModal] = useState(false)
    const [funcionario, setFuncionario] = useState<Funcionario>(Funcionario.vazio())
    const [tipoModal, setTipoModal] = useState('')
    const [listagem, setListagem] = useState(funcionarios)

    
    function funcionarioExcluido(funcionario: Funcionario){
        setFuncionario(funcionario);
        setTipoModal('excluir');
        setOpenModal(true)
    }
    function salvarFuncionario(){
        setFuncionario(Funcionario.vazio())
        setTipoModal('selecionado')
        setOpenModal(true)
    }
    function editarFuncionario(funcionario: Funcionario){
        setFuncionario(funcionario)
        setTipoModal('selecionado')
        setOpenModal(true)
    }
    function exclusao(id: any){
        const materiaisFiltrados = listagem.filter((funcionario) => funcionario.id !== id);
        setListagem(materiaisFiltrados);
        setOpenModal(false);
    }
    function edicao(funcionarioEditado: Funcionario){
        const indexToEdit = listagem.findIndex((funcionario) => funcionario.id === funcionarioEditado.id);
        if (indexToEdit !== -1) {
            const listaAtualizada = [...listagem];
            listaAtualizada[indexToEdit] = funcionarioEditado;
            setListagem(listaAtualizada);
            setOpenModal(false);
        } else {
            setOpenModal(false);
        }
    }
    function adicao(funcionarioNovo: Funcionario){
        console.log(funcionarioNovo)
        if (verificaObjetoInvalido(funcionarioNovo) === true){
            setListagem([...listagem, funcionarioNovo])
            
        } else {
            alert("Objeto Inválido")
            console.log(funcionarioNovo)
        }
        
    }
    function verificaObjetoInvalido(funcionarioNovo: Funcionario) {
        if (
            !funcionarioNovo.id || !funcionarioNovo.nome || !funcionarioNovo.cpf ||
            !funcionarioNovo.rg ||  !funcionarioNovo.celular || !funcionarioNovo.email ||
            !funcionarioNovo.senha
          ) {
            return false;
          }
          return true;
        }

    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between mb-10">
                <Titulo>Funcionários</Titulo>
            </div>
            <TabelaRoot objeto={listagem}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={editarFuncionario}
                    objetoExcluido={funcionarioExcluido}
                    salvarFuncionario={salvarFuncionario}
                    />

            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo={tipoModal == 'selecionado' ? 'Criar novo funcionário': 'Tem certeza que deseja excluir:'}
            > {tipoModal == 'selecionado' ? <ModalRootFuncionario funcionario={funcionario} setOpenModal={setOpenModal} editar={edicao} adicao={adicao}/>:<ModalExcluir objeto={funcionario} exclusao={exclusao}/>} </Modal>

        </LayoutUser>
    )
}
