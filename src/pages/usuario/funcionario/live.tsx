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

export default function FuncionarioLive() {

    const [lives, setLives] = useState<Live[]>([]);
    const [listaTurmas, setListaTurmas] = useState<Turma[]>([]);
    const [nome, setNome] = useState('')
    const [link, setLink] = useState('')
    const [professor, setProfessor] = useState('')
    const [data, setData] = useState(new Date(0))
    const [turmas, setTurmas] = useState<string[]>([])
    const turmasUnicas = listaTurmas.map((turma: any) => turma.nome);

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
      if (!nome || turmas.length === 0 || !link || !data) {
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