import {Botao} from "@/components/Botao";
import Checkbox from "@/components/Checkbox";
import DatePicker from "@/components/DatePicker";
import EntradaPerfil from "@/components/EntradaPerfil";
import LayoutUser from "@/components/LayoutUser";
import Titulo from "@/components/Titulo";
import Live from "@/core/Live";
import Turma from "@/core/Turma";
import { useState } from "react";

export default function FuncionarioLive() {

    const [lives, setLives] = useState([
        new Live("Live de Repertório","online terça/tarde", "Wellington", new Date(0), "www.google.com", "Id1", false),
    ])
    const [listaTurmas, setListaTurmas] = useState([
        new Turma('Presencial terça/tarde', 'Linguagem', 'Felipe Alves', 'terça-feira', '14h', 'Presencial', 'idA', false),
        new Turma('Online terça/tarde', 'Redação', 'Wellington', 'terça-feira', '14h', 'Online', 'idB', false),
        new Turma('Presencial sábado/tarde', 'Redação', 'Wellington', 'sábado', '14h', 'Presencial', 'idC', false),
    ])

    const [nome, setNome] = useState('')
    const [link, setLink] = useState('')
    const [professor, setProfessor] = useState('')
    const [data, setData] = useState(new Date(0))
    const [turmas, setTurmas] = useState<string[]>([])

    const turmasUnicas = listaTurmas.map((turma: { nome: any }) => turma.nome);

    function adicao(){
        if (!nome || turmas.length === 0 || !link || !data) {
            alert("Preencha todos os campos obrigatórios.");
            return;
          }
        
          const novasLives = turmas.map((turmaSelecionada) => {
            return new Live(nome, turmaSelecionada, professor, data, link, "id" + Math.random(), false);
          });

          setLives([...lives, ...novasLives]);
          alert("Lives criadas com sucesso!")

          setNome('');
          setLink('');
          setProfessor('');
    }

    return (
        <LayoutUser usuario={'funcionario'} className="text-black">

            <Titulo>Marcar Live</Titulo>
            <Checkbox titulo="Turma (as)" opcoes={[...turmasUnicas]} setOpcao={setTurmas}/>
            <div className="grid grid-cols-1 w-fit">
                <EntradaPerfil texto="Título" placeholder="Digite o título da live" className={'ml-9 mt-2 w-full'} valor={nome} valorMudou={setNome}/>
                <EntradaPerfil texto="Link" placeholder="Link para acessar a live" className={'ml-9 mt-2 w-full'} valor={link} valorMudou={setLink}/>
                <DatePicker titulo="Data Selecionada" classname="ml-9" setData={setData}/>
                <Botao onClick={adicao} className="w-36 bg-blue-400 ml-9 mt-4" cor={'blue'}>Marcar</Botao>
            </div>

        </LayoutUser>
    )
}