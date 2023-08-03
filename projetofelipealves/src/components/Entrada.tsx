interface EntradaProps{
    texto: string
    tipo?: 'text' | 'number'
    valor?: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
    placeholder?: string
}
export default function Entrada(props: EntradaProps){
    return (
        <div className="flex flex-col">
            <label className="font-Montserrant">
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border-b border-black focus:outline-none py-1 px-5 mb-7
                    ${props.somenteLeitura ? '' : 'focus:bg-slate-50'}
                `}
                placeholder={props.placeholder ?? 'Digite sua resposta'} />
        </div>
    )
}