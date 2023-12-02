import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import { useEffect, useState } from "react";
import Aluno from "@/core/Aluno";
import Turma from "@/core/Turma";

export default function FuncionarioTurmas() {

    const turmas = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, ['idTurma1'],false , '123', "idTeste", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, ['idTurma1','idTurma2', 'idTurma3'],true , 'abc', "idTeste2", false),
    new Aluno('teste 3', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, ['idTurma2'],true , 'abc', "idTeste3", false),
    ]
    const [listaTurmas, setListaTurmas] = useState<Turma[]>([])

    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento']
    //aqui o seletor vai mostrar apenas as turmas que existem no BD
    const [select, setSelect] = useState<string[]>([])
    const [listagem, setListagem] = useState(turmas)
    const [filtragem, setFiltragem] = useState(listagem)
    const [filtro, setFiltro] = useState('Todos(as)')
    
    const aoClicar = () => {
        if (filtro === "Todos(as)") {
            setFiltragem(listagem);
        } else {
            const alunosFiltrados = listagem.filter((aluno) =>
                aluno.turma.some((turmaId) =>
                    listaTurmas.find((turma) => turma.id === turmaId && turma.nome === filtro)
                )
            );
            setFiltragem(alunosFiltrados);
        }
    };

    useEffect(() => {
        aoClicar();
    }, [filtro])

    useEffect(() => {
        setListaTurmas([]
          //Pode apagar o [] 
          //Obter lista de turmas do banco( )
        )
          setSelect(['Todos(as)', ...listaTurmas.map((turma: { nome: any }) => turma.nome)])
    }, []);

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
