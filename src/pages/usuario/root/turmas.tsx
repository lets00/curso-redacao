import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import TabelaRoot from "@/components/TabelaRoot";
import Titulo from "@/components/Titulo";
import { useEffect, useState } from "react";
import Aluno from "@/core/Aluno";
import Botao from "@/components/Botao";
import Modal from "@/components/Modal";
import ModalRootTurma from "@/components/modals/ModalRootTurma";
import ModalExcluir from "@/components/modals/ModalExcluir";

export default function RootTurmas() {

    const turmas = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, 'Presencial terça/tarde',false , '123', "idTeste", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'Online terça/tarde',true , 'abc', "idTeste2", false),
    ]
    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento']
    const select = ['Todos(as)','Presencial terça/tarde', 'Online terça/tarde', 'Presencial sábado/tarde']

    const [openModal, setOpenModal] = useState(false)
    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())
    const [lista, setLista] = useState(turmas)
    const [tipoModal, setTipoModal] = useState('')
    const [listagem, setListagem] = useState(turmas)

    
    const aoClicar = (conteudo: any) => {
        if(conteudo == "Todos(as)"){
            setListagem(turmas);
        } else {
            const materiaisFiltrados = turmas.filter((aluno) => aluno.turma === conteudo);
            setListagem(materiaisFiltrados);
        }
      }
    function alunoSelecionado(aluno: Aluno){
        setAluno(aluno)
        //setTipoModal('editar')
        //setOpenModal(true)
    }
    function alunoExcluido(aluno: Aluno){
        setAluno(aluno);
        setTipoModal('excluir')
        setOpenModal(true)
    }
    function turmaSelecionada(){
        setOpenModal(true)
    }

    useEffect(() => {
        aoClicar(select[0]);
    }, [])

    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Turmas</Titulo>
                <Botao onCLick={() => turmaSelecionada()} className="mx-8 px-10">Gerenciar Turmas</Botao>
            </div>
            <Select seletor={select}
                    titulo="Turma"
                    aoClicar={aoClicar}/>
            <TabelaRoot objeto={listagem}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={alunoSelecionado}
                    objetoExcluido={alunoExcluido}
                    turmas
                    />
                    
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Gerenciar turma'
            >{tipoModal == 'selecionado' ? <ModalRootTurma turmas={select} turmaSelecionada={turmaSelecionada}/>:<ModalExcluir/>}</Modal>

        </LayoutUser>
    )
}
