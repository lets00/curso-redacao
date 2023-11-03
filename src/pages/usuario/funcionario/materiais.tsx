import {Botao} from "@/components/Botao";
import Checkbox from "@/components/Checkbox";
import EntradaPerfil from "@/components/EntradaPerfil";
import FileInput from "@/components/FileInput";
import LayoutUser from "@/components/LayoutUser";
import Titulo from "@/components/Titulo";
import Material from "@/core/Material";
import Link from "next/link";
import { useState } from "react";

export default function Materiais() {

    const [materiais, setMateriais] = useState([
        new Material('Material da aula sobre Redação 1', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Redação', 'presencial terça/tarde', 'Abner', new Date(0),'idA' , false),
        new Material('Material da aula sobre Redação 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(0),'idB' , false),
    ])

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [arquivo, setArquivo] = useState('')
    const [link, setLink] = useState('')
    const [disciplina, setDisciplina] = useState('')
    const [turma, setTurma] = useState('')
    const [professor, setProfessor] = useState('')
    const [data, setData] = useState(new Date(0))

    function adicao(materialNovo: Material){
        console.log(materialNovo)
        if (verificaObjetoInvalido(materialNovo) === true){
            setMateriais([...materiais, materialNovo])
            
        } else {
            alert("Objeto Inválido")
            console.log(materialNovo)
        }        
    }
    function verificaObjetoInvalido(materialNovo: Material) {
        if (
            !materialNovo.id || !materialNovo.nome || !materialNovo.descricao ||
            !materialNovo.arquivo ||  !materialNovo.data || !materialNovo.disciplina ||
            !materialNovo.professor
          ) {
            return false;
          }
          return true;
        }

    return (
        <LayoutUser usuario={'funcionario'} className="text-black">

            <div className="flex place-content-between">
                <Titulo>Postar Material</Titulo>
                <Link href="/usuario/funcionario/listarMateriais" className="px-10 mx-8 py-2 rounded-md text-white bg-pink-400">Listar Materiais</Link>
            </div>
            <Checkbox titulo="Modalidade" opcoes={['Online','Presencial']}/>
            <Checkbox titulo="Turma (as)" opcoes={['Segunda 18h45 - 21h45','Terça 9h - 12h','Terça 14h - 17h','Terça 18h45 - 21h45']}/>
            <div className="grid grid-cols-2 w-3/4">
                <EntradaPerfil texto="Título" placeholder="Digite o título da atividade" className={'ml-9 mt-2 w-full'} valor={nome} valorMudou={setNome}/>
                <EntradaPerfil texto="Descrição" placeholder="Digite a descrição da atividade" className={'ml-9 mt-2 w-full'} valor={descricao} valorMudou={setDescricao}/>
                <EntradaPerfil texto="Link" placeholder="Link usado no material (opcional)" className={'ml-9 mt-2 w-full'} valor={link} valorMudou={setLink}/>
                <FileInput/>
                <Botao onClick={()=>{adicao(new Material(nome, descricao, arquivo, link, disciplina, turma, professor, data, "id", false))}} className="w-36 bg-blue-400 ml-9 mt-4" cor={'blue'}>Enviar</Botao>
            </div>

        </LayoutUser>
    )
}