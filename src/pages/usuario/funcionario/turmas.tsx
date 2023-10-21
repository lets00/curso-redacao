import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import { useEffect, useState } from "react";
import Aluno from "@/core/Aluno";

export default function FuncionarioTurmas() {

    const turmas = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, 'Presencial terça/tarde',false , '123', "idTeste", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'Online terça/tarde',true , 'abc', "idTeste2", false),
    new Aluno('teste 3', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'Presencial sábado/tarde',true , 'abc', "idTeste3", false),
    ]
    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento']
    const select = ['Todos(as)','Presencial terça/tarde', 'Online terça/tarde', 'Presencial sábado/tarde']

    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())
    const [listagem, setListagem] = useState(turmas)
    const [filtragem, setFiltragem] = useState(listagem)
    const [filtro, setFiltro] = useState('Todos(as)')
    
    
    const aoClicar = () => {
        if(filtro == "Todos(as)"){
            setFiltragem(listagem);
        } else {
            const materiaisFiltrados = listagem.filter((aluno) => aluno.turma === filtro);
            setFiltragem(materiaisFiltrados);
        }
      }
    function alunoSelecionado(aluno: Aluno){
        setAluno(aluno)
    }
    function alunoExcluido(aluno: Aluno){
    }
    function salvarAluno(aluno: Aluno){
    }
    function novoAluno(){
        setAluno(Aluno.vazio())
    }

    useEffect(() => {
        aoClicar();
    }, [filtro])

    return (
        <LayoutUser usuario={'funcionario'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Turmas</Titulo>
            </div>
            <Select seletor={select}
                    titulo="Turma"
                    setFiltro={setFiltro}/>
            <Tabela objeto={filtragem}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    //objetoSelecionado={alunoSelecionado}
                    //objetoExcluido={alunoExcluido}
                    />

        </LayoutUser>
    )
}
