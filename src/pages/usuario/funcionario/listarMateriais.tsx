import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import ModalExcluir from "@/components/modals/ModalExcluir";
import ModalRootMateriais from "@/components/modals/ModalRootMateriais";
import Aluno from "@/core/Aluno";
import Comentario from "@/core/Comentario";
import Material from "@/core/Material";
import Turma from "@/core/Turma";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListarMateriais() {
    
    const materiais = [
        new Material('Material da aula sobre Redação 1', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Redação', 'presencial terça/tarde', 'Abner', new Date(0),'idA' , false),
        new Material('Material da aula sobre Redação 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(0),'idB' , false),
        new Material('Material TESTE', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Linguagem', 'presencial terça/tarde', 'Abner', new Date(0),'idC' , false),
        new Material('Material TESTE 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Linguagem', 'presencial terça/manhã', 'João', new Date(0),'idD' , false)
    ]
    const comentarios = [
        new Comentario('idA', 'texto exemplo', 5, 'id1', 'idTeste1', false),
        new Comentario('idA', 'texto exemplo2', 3, 'id2', 'idTeste1', false),
        new Comentario('idA', 'texto exemplo3', 3, 'id1', 'idTeste2', false),
        new Comentario('idB', 'texto exemplo4', 5, 'id2', 'idTeste3', false),
        new Comentario('idB', 'texto exemplo5', 3, 'id1', 'idTeste4', false),
        new Comentario('idC', 'texto exemplo6', 2, 'id2', 'idTeste5', false),
    ]
    const alunos = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
        'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, ['idDeTurma1'],false , '123', "id1", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua teste', '222-111', 'mari@gmail',
        'pedro', 'ana', 'rg2', 'cpf2', 10, ['idDeTurma1'],true , 'abc', "id2", false),
    ]
    const [listaTurmas, setListaTurmas] = useState<Turma[]>([])

    const dados = ['nome','descricao', 'data']
    const cabecalho = ['Nome', 'Descrição', 'Data de publicação', 'Opções']
    const [select, setSelect] = useState<string[]>([])
    const [material, setMaterial] = useState<Material>(Material.vazio())
    const [openModal, setOpenModal] = useState(false)
    const [tipoModal, setTipoModal] = useState('')
    const [listagem, setListagem] = useState(materiais)
    const [filtragem, setFiltragem] = useState(listagem)
    const [recarregar, setRecarregar] = useState(false)
    const [filtro, setFiltro] = useState('Todos(as)')
    
    
    const aoClicar = () => {
        if(filtro == "Todos(as)"){
            setFiltragem(listagem);
        } else {
            const materiaisFiltrados = listagem.filter((material) => material.disciplina === filtro);
            setFiltragem(materiaisFiltrados);
        }
        setRecarregar(false);
      }
    function materialSelecionado(material: Material){
        setMaterial(material);
        setTipoModal('selecionado')
        setOpenModal(true);
    }
    function materialExcluido(material: Material){
        setMaterial(material);
        setTipoModal('excluir');
        setOpenModal(true)
    }
    function exclusao(id: any){
        const materiaisFiltrados = listagem.filter((material) => material.id !== id);
        setListagem(materiaisFiltrados);
        setOpenModal(false);
        setRecarregar(true);
    }

    useEffect(() => {
        if (recarregar || filtro) {
            aoClicar();
        }
    }, [recarregar, filtro]);

    useEffect(() => {
        setListaTurmas([]
          //Pode apagar o [] 
          //Obter lista de turmas do banco( )
        )
          setSelect(['Todos(as)', ...listaTurmas.map((turma: { disciplina: any }) => turma.disciplina)])
    }, []);

    return (
        <LayoutUser usuario={'funcionario'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Listar Materiais</Titulo>
                <Link href="/usuario/funcionario/materiais" className="px-10 mx-8 py-2 rounded-md text-white bg-pink-400">Postar Material</Link>
            </div>
            <Select seletor={select}
                    titulo="Disciplina"
                    setFiltro={setFiltro}/>
            <Tabela objeto={filtragem}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={materialSelecionado}
                    objetoExcluido={materialExcluido}
                    />
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo={tipoModal == 'selecionado' ? 'Análise de Feedback': 'Tem certeza que deseja excluir:'}
            subtitulo={material.nome}>{tipoModal == 'selecionado' ? <ModalRootMateriais comentarios={comentarios} material={material} alunos={alunos}/>:<ModalExcluir objeto={material} exclusao={exclusao}/>}</Modal>
        </LayoutUser>
    )
}