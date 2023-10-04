import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import ModalExcluir from "@/components/modals/ModalExcluir";
import ModalRootMateriais from "@/components/modals/ModalRootMateriais";
import Material from "@/core/Material";
import Link from "next/link";
import { useState } from "react";

export default function ListarMateriais() {
    
    const Redação = [
        new Material('Material da aula sobre Redação 1', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Redação', 'presencial terça/tarde', 'Abner', new Date(0),'id' , false),
        new Material('Material da aula sobre Redação 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(0),'id' , false)
    ]
    const Linguagem = [
        new Material('Material TESTE', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Redação', 'presencial terça/tarde', 'Abner', new Date(0),'id' , false),
        new Material('Material TESTE 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(0),'id' , false)
    ]
    const dados = ['nome','descricao', 'data']
    const cabecalho = ['Nome', 'Descrição', 'Data de publicação', 'Opções']
    const select = ['Redação','Linguagem','Matemática']

    const [material, setMaterial] = useState<Material>(Material.vazio())
    const [openModal, setOpenModal] = useState(false)
    const [lista, setLista] = useState(Redação)
    const [tipoModal, setTipoModal] = useState('')
    
    
    const aoClicar = (conteudo: any) => {
        setLista(conteudo);
        console.log(conteudo)
      };
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
    function salvarMaterial(material: Material){
    }
    function novoMaterial(){
        setMaterial(Material.vazio())
    }

    return (
        <LayoutUser usuario={'funcionario'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Listar Materiais</Titulo>
                <Link href="/usuario/funcionario/materiais" className="px-10 mx-8 py-2 rounded-md text-white bg-pink-400">Postar Material</Link>
            </div>
            <Select seletor={select}
                    titulo="Disciplina"
                    aoClicar={aoClicar}/>
            <Tabela objeto={lista}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={materialSelecionado}
                    objetoExcluido={materialExcluido}
                    />
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo={tipoModal == 'selecionado' ? 'Análise de Feedback': 'Tem certeza que deseja excluir:'}
            subtitulo={material.nome}>{tipoModal == 'selecionado' ? <ModalRootMateriais/>:<ModalExcluir/>}</Modal>
        </LayoutUser>
    )
}