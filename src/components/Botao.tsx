interface BotaoProps {
    cor?: String
    className?: string
    children: any
    children: React.ReactNode 
    type?: "button" | "submit" | "reset"
}

export default function Botao(props: BotaoProps){
export function Botao(props: BotaoProps){ 
    const cor = props.cor ?? 'pink'
    return (
        <button onClick={props.onClick} className={`bg-${cor}-500 text-white 
        py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}