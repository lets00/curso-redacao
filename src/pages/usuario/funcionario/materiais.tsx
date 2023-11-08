import {Botao} from "@/components/Botao";
import Checkbox from "@/components/Checkbox";
import DatePicker from "@/components/DatePicker";
import EntradaPerfil from "@/components/EntradaPerfil";
import FileInput from "@/components/FileInput";
import LayoutUser from "@/components/LayoutUser";
import Titulo from "@/components/Titulo";
import Material from "@/core/Material";
import Turma from "@/core/Turma";
import Link from "next/link";
import { useState } from "react";

export default function Materiais() {

    const [materiais, setMateriais] = useState([
        new Material('Material da aula sobre Redação 1', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Redação', 'presencial terça/tarde', 'Abner', new Date(0),'idA' , false),
        new Material('Material da aula sobre Redação 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(0),'idB' , false),
    ])
    const [listaTurmas, setListaTurmas] = useState([
      new Turma('Presencial terça/tarde', 'Linguagem', 'Felipe Alves', 'terça-feira', '14h', 'Presencial', 'idA', false),
      new Turma('Online terça/tarde', 'Redação', 'Wellington', 'terça-feira', '14h', 'Online', 'idB', false),
      new Turma('Presencial sábado/tarde', 'Redação', 'Wellington', 'sábado', '14h', 'Presencial', 'idC', false),
  ])

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [arquivo, setArquivo] = useState('')
    const [link, setLink] = useState('')
    const [professor, setProfessor] = useState('')
    const [data, setData] = useState(new Date(0))
    const [turmas, setTurmas] = useState<string[]>([])


    const turmasUnicas = listaTurmas.map((turma: { nome: any }) => turma.nome);

    function adicao() {
      if (!nome || turmas.length === 0) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }
    
      const novosMateriais = turmas.map((turmaSelecionada) => {
        const disciplinaTurma = listaTurmas.find((turma) => turma.nome === turmaSelecionada);
        if (disciplinaTurma) {
          return new Material(nome, descricao, arquivo, link, disciplinaTurma.disciplina, turmaSelecionada, professor, data, "id" + Math.random(), false);
        }
        return null; 
      });
    
      const materiaisValidos = novosMateriais.filter((material) => material !== null) as Material[];
      const novaLista = ([...materiais, ...materiaisValidos]);
      setMateriais(novaLista);
      alert("Materiais criados com sucesso!");
    
      setNome('');
      setDescricao('');
      setLink('');
      setProfessor('');
    }
    

    return (
        <LayoutUser usuario={'funcionario'} className="text-black">

            <div className="flex place-content-between">
                <Titulo>Postar Material</Titulo>
                <Link href="/usuario/funcionario/listarMateriais" className="px-10 mx-8 py-2 rounded-md text-white bg-pink-400">Listar Materiais</Link>
            </div>
            <Checkbox titulo="Turma (as)" opcoes={[...turmasUnicas]} setOpcao={setTurmas}/>
            <div className="grid grid-cols-2 w-3/4">
                <EntradaPerfil texto="Título" placeholder="Digite o título da atividade" className={'ml-9 mt-2 w-full'} valor={nome} valorMudou={setNome}/>
                <EntradaPerfil texto="Descrição" placeholder="Digite a descrição da atividade" className={'ml-9 mt-2 w-full'} valor={descricao} valorMudou={setDescricao}/>
                <EntradaPerfil texto="Link" placeholder="Link usado no material (opcional)" className={'ml-9 mt-2 w-full'} valor={link} valorMudou={setLink}/>
                <DatePicker titulo="Data Selecionada" classname="ml-9" setData={setData}/>
                <FileInput setArquivo={setArquivo}/>
                <Botao onClick={adicao} className="w-36 bg-blue-400 ml-9 mt-4 h-10" cor={'blue'}>Enviar</Botao>
            </div>

        </LayoutUser>
    )
}