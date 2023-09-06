import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import Link from "next/link";
import { useState } from "react";
import Aluno from "@/core/Aluno";

export default function ListarMateriais() {

    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())

    const materiais = [
        new Aluno('joao', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, 'presencial - terça/tarde',false , '123', "idTeste", false),
        new Aluno('maria', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'online - terça/noite',true , 'abc', "idTeste2", false),
    ]
    const dados = ['natural','nome','cpf','mensalidade']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Mensalidade']
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
        <LayoutUser usuario={'funcionario'}>
            <div className="flex place-content-between">
                <Titulo>Teste por enquanto</Titulo>
                <Link href="/usuario/funcionario/Materiais" className="px-10 mx-8 py-2 rounded-md text-white bg-pink-400">Postar Aluno</Link>
            </div>
            <Select seletor={select}
                    titulo="Disciplina"/>
            <Tabela objeto={materiais}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    //objetoSelecionado={alunoSelecionado}
                    //objetoExcluido={alunoExcluido}
                    />

        </LayoutUser>
    )
}