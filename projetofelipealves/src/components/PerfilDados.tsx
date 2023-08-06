interface PerfilProps{
    texto: string
    tipo?: 'text' | 'number'
    valor?: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
    placeholder?: string
    className?: any
}
export default function PerfilDados(props: PerfilProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="font-Montserrant">
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border-none bg-slate-200 rounded-sm
                    focus:outline-none py-1 px-5 mb-4 mr-8
                    ${props.somenteLeitura == true ? '' : 'focus:bg-slate-50'}
                `}
                placeholder={props.placeholder ?? '...'} />
        </div>
    )
}