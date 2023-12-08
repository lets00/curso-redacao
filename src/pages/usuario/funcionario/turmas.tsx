import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import { useEffect, useState } from "react";
import Aluno from "@/core/Aluno";
import { db } from "@/backend/config";
import {collection, query, where, getDocs, DocumentData, deleteDoc, doc, updateDoc} from "firebase/firestore";

export default function FuncionarioTurmas() {
  const dados = ["natural", "nome", "cpf", "pagamento"];
  const cabecalho = ["Estado", "Nome", "CPF", "Pagamento"];
  const [select, setSelect] = useState<string[]>([])
  const [aluno, setAluno] = useState<Aluno>(Aluno.vazio());
  const [listagem, setListagem] = useState<DocumentData[]>([]);
  const [filtragem, setFiltragem] = useState<DocumentData[]>(listagem);
  const [filtro, setFiltro] = useState("Todos(as)");
  const [turmas, setTurmas] = useState<string[]>([]);

  const aoClicar = async () => {
    try {
      if (filtro === "Todos(as)") {
        const alunosRef = collection(db, "Estudante");
        const alunosQuery = query(alunosRef);
        const snapshot = await getDocs(alunosQuery);
        const alunos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFiltragem(alunos); 
      } else {
        const alunosRef = collection(db, "Estudante");
        const alunosQuery = query(alunosRef, where("turma", "==", filtro));
        const snapshot = await getDocs(alunosQuery);
        const alunos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFiltragem(alunos); 
      }
    } catch (error) {
      console.error("Erro ao carregar alunos:", error);
    }
  };

  useEffect(() => {
    const carregarTurmas = async () => {
      try {
        const turmasRef = collection(db, "Turmas"); 
        const turmasQuery = query(turmasRef);
        const snapshot = await getDocs(turmasQuery);
        const turmas = snapshot.docs.map((doc) => doc.data().nome);
        setTurmas(turmas);
        setSelect(turmas); 
      } catch (error) {
        console.error("Erro ao carregar turmas:", error);
      }
    };

    carregarTurmas();
  }, []);


  useEffect(() => {
    aoClicar();
  }, [filtro]);

  return (
    <LayoutUser usuario={"funcionario"} className="text-black">
      <div className="flex place-content-between">
        <Titulo>Turmas</Titulo>
      </div>
      <Select seletor={["Todos(as)", ...select]} titulo="Turma" setFiltro={setFiltro} />

      <Tabela
        objeto={filtragem}
        propriedadesExibidas={dados}
        cabecalho={cabecalho}
        //objetoSelecionado={alunoSelecionado}
       //objetoExcluido={excluirAluno}
      />
      {aluno.id && (
        <div>
          <h2>Detalhes do Aluno</h2>
          <p>Estado: {aluno.natural}</p>
          <p>Nome: {aluno.nome}</p>
          <p>CPF: {aluno.cpf}</p>
          <p>Pagamento: {aluno.pagamento}</p>
          <p>Turma: {aluno.turma}</p>
        </div>
      )}
    </LayoutUser>
  );
}

