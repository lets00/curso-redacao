import { format } from "date-fns"
import { IconeFeedback, IconeDeletar } from "./Icones"

interface TabelaProps {
    objeto: any
    propriedadesExibidas: any
    cabecalho: string[]
    objetoSelecionado?: (objeto: any) => void
    objetoExcluido?: (objeto: any) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.objetoExcluido || props.objetoSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                {props.cabecalho.map((coluna: any, index: any) => (
                <th key={index}>{coluna}</th>
                ))}
            </tr>
        )
    }

    function renderizarAcoes(objeto: any){
        return (
            <td className="flex justify-center gap-2">
                {props.objetoSelecionado ? (
                    <button onClick={() => props.objetoSelecionado?.(objeto)} className="
                        flex justify-center items-center
                        rounded-full p-2 m-1 bg-slate-300 hover:bg-white">
                            {IconeFeedback}
                    </button>
                ) : false}
                {props.objetoExcluido ? (
                    <button onClick={() => props.objetoExcluido?.(objeto)} className="
                        flex justify-center items-center
                        rounded-full p-2 m-1 bg-slate-300 hover:bg-white">
                            {IconeDeletar}
                    </button>
                ) : false}
            </td>
        )
    }

    function renderizarDados(){
        return props.objeto?.map((objeto: any, index: any) => {
            return (
                <tr key={objeto.id}
                    className={`${index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200'}`}>
                    {props.propriedadesExibidas.map((propriedade: any, propIndex: any) => (
                        <td key={propIndex} className="text-center p-2">
                            {objeto[propriedade] instanceof Date ?
                                format(objeto[propriedade], 'dd-MM-yyyy')
                                 : (
                                objeto[propriedade]
                            )}
                        </td>
                    ))}
                    {exibirAcoes ? renderizarAcoes(objeto): false}
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
    )
}