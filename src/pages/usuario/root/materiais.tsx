import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import ModalRootMateriais from "@/components/modals/ModalRootMateriais";
import Material from "@/core/Material";
import Link from "next/link";
import { useState } from "react";

export default function Aluno() {


    const materiais = [
        new Material('Material da aula sobre Redação 1', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Redação', 'presencial terça/tarde', 'Abner', new Date(),'id' , false),
        new Material('Material da aula sobre Redação 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(),'id' , false)
    ]
    const materiais2 = [
        new Material('Material de teste', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Redação', 'presencial terça/tarde', 'Abner', new Date(),'id' , false),
        new Material('Material de teste', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(),'id' , false)
    ]
    const dados = ['nome', 'data', 'professor']
    const cabecalho = ['Título', 'Data de publicação', 'Quem publicou', `Ver feedback & Excluir`]
    const select = ['Redação','Linguagem','Matemática']

    const [lista, setLista] = useState(materiais)
    const [material, setMaterial] = useState<Material>(Material.vazio())
    const [botaoAtivo, setBotaoAtivo] = useState('redacao');
    const [openModal, setOpenModal] = useState(false)


    const aoClicar = (conteudo: any, botao: any) => {
        setLista(conteudo);
        setBotaoAtivo(botao);
      };
    function materialSelecionado(material: Material){
        setMaterial(material);
        setOpenModal(true);
    }
    function materialExcluido(material: Material){
    }


    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Materiais</Titulo>
            </div>
            <Select seletor={select}
                titulo="Disciplina"/>
            <Tabela objeto={lista} 
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={materialSelecionado}
                    objetoExcluido={materialExcluido}></Tabela>   
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Análise de Feedback'
            subtitulo={material.nome}><ModalRootMateriais/></Modal>         
        </LayoutUser>
    )
}