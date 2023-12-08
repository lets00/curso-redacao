import Aluno from "@/core/Aluno"
import Professor from "@/core/Professor"
import { IconeFeedback, IconeDeletar } from "./Icones"

interface TabelaProps {
    professores: Professor[]
    professorSelecionado?: (professor: Professor) => void
    professorExcluido?: (professor: Professor) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.professorExcluido || props.professorSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>RG</th>
                {exibirAcoes ? <th>Ações</th> : false}
            </tr>
        )
    }

    function renderizarAcoes(professor: Professor){
        return (
            <td className="flex justify-center gap-2">
                {props.professorSelecionado ? (
                    <button onClick={() => props.professorSelecionado?.(professor)} className="
                        flex justify-center items-center
                        rounded-full p-2 m-1 bg-slate-300 hover:bg-white">
                            {IconeFeedback}
                    </button>
                ) : false}
                {props.professorExcluido ? (
                    <button onClick={() => props.professorExcluido?.(professor)} className="
                        flex justify-center items-center
                        rounded-full p-2 m-1 bg-slate-300 hover:bg-white">
                            {IconeDeletar}
                    </button>
                ) : false}
            </td>
        )
    }

    function renderizarDados(){
        return props.professores?.map((professor, i) => {
            return (
                <tr key={professor.id}
                    className={`${i % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200'}`}>
                    <td className="text-center p-2">{professor.nome}</td>
                    <td className="text-center p-2">{professor.cpf}</td>
                    <td className="text-center p-2">{professor.rg}</td>
                    {exibirAcoes ? renderizarAcoes(professor): false}
                </tr>
            )
        })
    }

    return (
        <table className="w-full border-separate border-spacing-y-2">
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
      );
    }