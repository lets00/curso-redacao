import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import { useState } from "react";
import Aluno from "@/core/Aluno";

export default function FuncionarioTurmas() {

    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())

    const turmas = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, 'presencial - terça/tarde',false , '123', "idTeste", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'online - terça/noite',true , 'abc', "idTeste2", false),
    ]
    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento']
    const select = ['Presencial terça/tarde', 'Online terça/tarde', 'Presencial sábado/tarde']
    
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

    return (
        <LayoutUser usuario={'funcionario'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Turmas</Titulo>
            </div>
            <Select seletor={select}
                    titulo="Turma"/>
            <Tabela objeto={turmas}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    //objetoSelecionado={alunoSelecionado}
                    //objetoExcluido={alunoExcluido}
                    />

        </LayoutUser>
    )
}