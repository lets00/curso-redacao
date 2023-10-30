interface BotaoProps {
    cor?: String
    className?: string
    children: React.ReactNode 
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}

export function Botao(props: BotaoProps){ 
    const cor = props.cor ?? 'pink'
    return (
        <button onClick={props.onClick} className={`bg-${cor}-500 text-white 
        py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}