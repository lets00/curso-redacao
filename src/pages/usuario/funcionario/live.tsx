import {Botao} from "@/components/Botao";
import Checkbox from "@/components/Checkbox";
import DatePicker from "@/components/DatePicker";
import EntradaPerfil from "@/components/EntradaPerfil";
import LayoutUser from "@/components/LayoutUser";
import Titulo from "@/components/Titulo";
import Live from "@/core/Live";
import Turma from "@/core/Turma";
import { useState, useEffect } from "react";
import {db} from "@/backend/config"
import { collection, addDoc, getDocs} from "firebase/firestore";
import { format } from "date-fns";

export default function FuncionarioLive() {

//CONFERIR

    const liveVazia = Live.vazio()
    const [live, setLive] = useState<Live>(liveVazia)
    const [lives, setLives] = useState<Live[]>([]);
    const [listaTurmas, setListaTurmas] = useState<Turma[]>([]);
    const [nome, setNome] = useState('')
    const [link, setLink] = useState('')
    const [professor, setProfessor] = useState('')
    const [data, setData] = useState(new Date(0))
    const [turmas, setTurmas] = useState<string[]>([])

    let turmasUnicas: string[] = [];

    useEffect(() => {
      const fetchLives = async () => {
        try {
          const livesSnapshot = await getDocs(collection(db, "Turmas"));
          const livesData = livesSnapshot.docs.map((doc) => doc.data() as Turma);
          setListaTurmas(livesData);
        } catch (error) {
          console.error("Erro ao buscar turmas no Firestore:", error);
        }
      };
  
      fetchLives();
    }, []);

    async function adicao() {
      if (!nome || turmas.length === 0 || !link || !data || data.getTime() === new Date(1000, 10, 10).getTime()) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }
    
      try {
        for (const turmaSelecionada of turmas) {
          const liveData = {
            nome,
            turma: turmaSelecionada,
            professor,
            data,
            link,
            id: "id" + Math.random(),
            status: false,
          };
    
          await addDoc(collection(db, "Live"), liveData);
    
          setLives((prevLives: Live[]) => [
            ...prevLives,
            new Live(
              nome,
              turmaSelecionada,
              professor,
              data,
              link,
              "id" + Math.random(),
              false
            ),
          ]);
        }
    
        alert("Lives criadas com sucesso!");
    
        setNome('');
        setLink('');
        setProfessor('');
        setData(new Date(0));
      } catch (error) {
        console.error("Erro ao adicionar a live:", error);
        alert("Ocorreu um erro ao criar a live. Tente novamente mais tarde.");
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
        <LayoutUser usuario={'funcionario'} className="text-black">

            <Titulo>Marcar Live</Titulo>
            <Checkbox titulo="Turma (as)" opcoes={[...turmasUnicas]} setOpcao={setTurmas}/>
            <div className="grid grid-cols-2 gap-10 w-fit">
                <div>
                    <EntradaPerfil texto="Título" placeholder="Digite o título da live" className={'ml-9 mt-2 w-full'} valor={nome} valorMudou={setNome}/>
                    <EntradaPerfil texto="Link" placeholder="Link para acessar a live" className={'ml-9 mt-2 w-full'} valor={link} valorMudou={setLink}/>
                    <DatePicker titulo="Data Selecionada" classname="ml-9" setData={setData} dataMin={new Date()}/>
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