interface BotaoProps {
    cor?: String
    className?: string
    children: any
    onCLick?: any
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'pink'
    return (
        <button onClick={props.onCLick} className={`bg-${cor}-400 text-white 
        py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}