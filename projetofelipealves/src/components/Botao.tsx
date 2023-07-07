interface BotaoProps {
    cor?: string
    className?: string
    children: any
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'pink'
    return (
        <button className={`bg-${cor}-500 text-white 
        px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}