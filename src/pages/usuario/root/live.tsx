import {Botao} from "@/components/Botao";
import Checkbox from "@/components/Checkbox";
import DatePicker from "@/components/DatePicker";
import EntradaPerfil from "@/components/EntradaPerfil";
import LayoutUser from "@/components/LayoutUser";
import Titulo from "@/components/Titulo";
import Live from "@/core/Live";
import Turma from "@/core/Turma";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function RootLive() {

    const [lives, setLives] = useState([
        new Live("Live de Repertório","online terça/tarde", "Wellington", new Date(2023, 10, 10), "www.google.com", "Id1", false),
    ])
    const [listaTurmas, setListaTurmas] = useState([
        new Turma('Presencial terça/tarde', 'Linguagem', 'Felipe Alves', 'terça-feira', '14h', 'Presencial', 'idTurma1', false),
        new Turma('Online terça/tarde', 'Redação', 'Wellington', 'terça-feira', '14h', 'Online', 'idTurma2', false),
        new Turma('Presencial sábado/tarde', 'Redação', 'Wellington', 'sábado', '14h', 'Presencial', 'idTurma3', false)
      ])

    const [nome, setNome] = useState('')
    const [link, setLink] = useState('')
    const [professor, setProfessor] = useState('Professor Teste')
    const [data, setData] = useState<Date>(new Date(0))
    const [turmas, setTurmas] = useState<string[]>([])
    const liveVazia = Live.vazio()
    const [live, setLive] = useState<Live>(liveVazia)

    let turmasUnicas: string[] = [];

    function adicao(){
        if (!nome || turmas.length === 0 || !link || data.getTime() == 0) {
            alert("Preencha todos os campos obrigatórios.");
            return;
          }

        const existeDuplicata = turmas.some((turmaSelecionada) =>
            lives.some(
            (live) =>
                live.nome === nome &&
                live.turma.includes(turmaSelecionada) &&
                live.data.getTime() === data.getTime() &&
                live.link === link
            )
        );

        if (existeDuplicata) {
            alert("Já existe uma Live com os mesmos atributos, verifique as turmas selecionadas ou realtere a data.");
            return;
        }
        
        if(live.id === liveVazia.id){
            const novasLives = turmas.map((turmaSelecionada) => {
            return new Live(nome, turmaSelecionada, professor, data, link, "id" + Math.random(), false);
            });
    
            setLives([...lives, ...novasLives]);
            alert("Lives criadas com sucesso!")
            setNome('');
            setLink('');
            setData(new Date(0))
        } else {
            if(turmas.length > 1){
                alert("Insira a alteração a apenas uma turma")
            } else {
                const indexToEdit = lives.findIndex((liveCopia) => liveCopia.id === live.id);
    
                if (indexToEdit !== -1) {
                    const listaAtualizada = [...lives];
                    listaAtualizada[indexToEdit] = new Live(nome, turmas[0], professor, data, link, live.id, false);;
                    setLives(listaAtualizada);
                    alert("Live atualizada!")
                    setNome('');
                    setLink('');    
                    setData(new Date(0))
                    setLive(liveVazia)
                } else {
                    alert("Live não encontrada")
                }
            }
        }
    }

    function edicao(live: Live){
        setNome(live.nome)
        setLink(live.link)
        setData(live.data)
        setLive(live)
    }

    function exclusao(live: Live){
        const livesFiltrados = lives.filter((liveCopia) => liveCopia.id !== live.id);
        setLives(livesFiltrados);
        setLive(liveVazia)
    }

    useEffect(() => {
        setListaTurmas([]
          //Pode apagar o [] 
          //Obter lista de turmas do banco( )
        )
          turmasUnicas = listaTurmas.map((turma: { nome: any }) => turma.nome);
    }, []);

    return (
        <LayoutUser usuario={'root'} className="text-black">

            <Titulo>Marcar Live</Titulo>
            <Checkbox titulo="Turma (as)" opcoes={[...turmasUnicas]} setOpcao={setTurmas}/>
            <div className="grid grid-cols-2 gap-10 w-fit">
                <div>
                    <EntradaPerfil texto="Título" placeholder="Digite o título da live" className={'ml-9 mt-2 w-full'} valor={nome} valorMudou={setNome}/>
                    <EntradaPerfil texto="Link" placeholder="Link para acessar a live" className={'ml-9 mt-2 w-full'} valor={link} valorMudou={setLink}/>
                    <DatePicker titulo="Data Selecionada" classname="ml-9" setData={setData} dataMin={new Date()} valor={data}/>
                    <Botao onClick={adicao} className="w-36 bg-blue-400 ml-9 mt-4" cor={'blue'}>Marcar</Botao>
                </div>
                
                <div>
                    <h3 className="font-Montserrant pt-2">Lives Criadas</h3>
                    <div className="flex flex-col rounded-md bg-slate-100 p-3 pt-2 m-1 max-h-60 overflow-y-auto">
                        {lives.map((live, index) => (
                            <div key={index} className="bg-white border rounded-md p-3 my-1 pb-4">
                                <div className="flex gap-3 items-center">
                                    {//Aqui tem ser colocada a imagem do professor
                                    }
                                    <img src="/images/IMG_3817.jpg" className="object-cover w-8 h-8 rounded-full"/>
                                    <h3 className="font-bold">
                                        {live.professor}
                                    </h3>
                                </div>
                                <h4 className="text-gray-600 mt-2 font-semibold">
                                    {format(live.data, 'dd-MM-yyyy')} {live.nome} 
                                </h4>
                                <h4 className="text-gray-600 font-semibold">
                                    {live.turma} 
                                </h4>
                                {professor === live.professor && 
                                <div className="flex gap-2">
                                    <Botao onClick={() => {exclusao(live)}} className="mt-2 p-4 pt-1 pb-1 font-semibold">Excluir</Botao>
                                    <Botao onClick={() => {edicao(live)}} className="mt-2 p-4 pt-1 pb-1 font-semibold">Editar</Botao>
                                </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>

                </div>

        </LayoutUser>
    )
}