import LayoutUser from "@/components/LayoutUser";
import TabelaRoot from "@/components/TabelaRoot";
import Titulo from "@/components/Titulo";
import { useState, useEffect } from "react";
import Funcionario from "@/core/Funcionario";
import Modal from "@/components/Modal";
import ModalRootFuncionario from '@/components/modals/ModalRootFuncionario'
import ModalExcluir from "@/components/modals/ModalExcluir";
import { getDocs, collection, addDoc, updateDoc, doc, getDoc, deleteDoc, DocumentData } from 'firebase/firestore';
import { db } from '@/backend/config';
import {Botao} from "@/components/Botao";

export default function RootFuncionarios() {

    const dados = ['nome','cpf', 'email']
    const cabecalho = ['Nome', 'CPF', 'Email', "Ações"]

    const [openModal, setOpenModal] = useState(false)
    const [funcionario, setFuncionario] = useState<Funcionario>(Funcionario.vazio())
    const [tipoModal, setTipoModal] = useState('')
    const [listagem, setListagem] = useState<Funcionario[]>([]);

    useEffect(() => {
        async function fetchFuncionarios() {
            const funcionariosCollection = collection(db, 'Funcionario');
            const funcionariosSnapshot = await getDocs(funcionariosCollection);
            const funcionariosData = funcionariosSnapshot.docs.map(doc => doc.data() as Funcionario);
            setListagem(funcionariosData);
        }

        fetchFuncionarios();
    }, []);
    
    function funcionarioExcluido(funcionario: Funcionario) {
        if (funcionario && funcionario.id) {
            setFuncionario(funcionario);
            setTipoModal('excluir');
            setOpenModal(true);
        } else {
            console.error("Funcionário ou ID não definido.");
        }
    }   
    function salvarFuncionario(){
        setFuncionario(funcionario)
        setTipoModal('selecionado')
        setOpenModal(true)
    }
    function editarFuncionario(funcionario: Funcionario) {
        setFuncionario(funcionario);
        setTipoModal('editar'); 
        setOpenModal(true);
    } 
    
    async function exclusao(funcionarioId: string | null) {
        try {
            console.log("ID do Funcionário:", funcionarioId);

            if (!funcionarioId) {
                console.error("ID do funcionário não definido.");
                setOpenModal(false);
                return;
            }
    
            const funcionarioRef = doc(db, 'Funcionario', funcionarioId);
    
            await deleteDoc(funcionarioRef);
    
            const listaAtualizada = listagem.filter((funcionario) => funcionario.id !== funcionarioId);
            setListagem(listaAtualizada);
            setOpenModal(false);
    
            console.log("Funcionário excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir o funcionário no Firestore", error);
            setOpenModal(false);
        }
    }

    async function edicao(funcionarioEditado: Funcionario) {
        try {

            if (!funcionarioEditado.id) {
                console.error("ID do funcionário não definido.");
                setOpenModal(false);
                return;
            } 

            const funcionarioRef = doc(db, 'Funcionario', funcionarioEditado.id);
            
            await updateDoc(funcionarioRef, {
                nome: funcionarioEditado.nome,
                cpf: funcionarioEditado.cpf,
                rg: funcionarioEditado.rg,
                celular: funcionarioEditado.celular,
                email: funcionarioEditado.email,
                senha: funcionarioEditado.senha,
            });
    
            const indexToEdit = listagem.findIndex((funcionario) => funcionario.id === funcionarioEditado.id);
            if (indexToEdit !== -1) {
                const listaAtualizada = [...listagem];
                listaAtualizada[indexToEdit] = funcionarioEditado;
                setListagem(listaAtualizada);
                setOpenModal(false);
            }
        } catch (error) {
            console.error("Erro ao editar o funcionário no Firestore", error);
            setOpenModal(false);
        }
    }
    
    async function adicao(funcionarioNovo: Funcionario) {
        if (verificaObjetoInvalido(funcionarioNovo)) {
            try {
                const funcionarioData = {
                    nome: funcionarioNovo.nome,
                    cpf: funcionarioNovo.cpf,
                    rg: funcionarioNovo.rg,
                    celular: funcionarioNovo.celular,
                    email: funcionarioNovo.email,
                    senha: funcionarioNovo.senha,
                };
    
                const docRef = await addDoc(collection(db, "Funcionario"), funcionarioData);
                console.log("Funcionário adicionado com ID:", docRef.id);
    
                const funcionarioSnapshot = await getDoc(doc(db, 'Funcionario', docRef.id));
                const novoFuncionario = funcionarioSnapshot.data() as Funcionario;
    
                setListagem([...listagem, novoFuncionario]);
                setOpenModal(false);
            
            } catch (error) {
                console.error("Erro ao adicionar o funcionário ao Firestore", error);
            }
        } else {
            alert("Objeto Inválido");
        }
    }
    function verificaObjetoInvalido(funcionarioNovo: Funcionario) {
        if (
            !funcionarioNovo.nome ||
            !funcionarioNovo.cpf ||
            !funcionarioNovo.rg ||
            !funcionarioNovo.celular ||
            !funcionarioNovo.email ||
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
                <Botao onClick={() => salvarFuncionario()} cor="blue">Adicionar Funcionário</Botao>
            </div>
            <TabelaRoot
            objeto={listagem}
            propriedadesExibidas={dados}
            cabecalho={cabecalho}
            objetoSelecionado={editarFuncionario}
            objetoExcluido={funcionarioExcluido}
            salvarFuncionario={salvarFuncionario}
            />

            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo={tipoModal == 'selecionado' ? 'Criar novo funcionário': 'Tem certeza que deseja excluir:'}
            subtitulo={tipoModal == 'excluir' && funcionario ? funcionario.nome : ''}
            > {tipoModal == 'selecionado' ?
            <ModalRootFuncionario funcionario={funcionario} setOpenModal={setOpenModal} editar={edicao} adicao={adicao}/>:<ModalExcluir objeto={funcionario} exclusao={() => exclusao(funcionario?.id)} />
        } </Modal>

        </LayoutUser>
    )
}
