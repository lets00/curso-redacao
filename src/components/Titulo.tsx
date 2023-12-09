interface TituloProps{
    className?: string
    children: any
}
export default function Titulo(props: TituloProps){
    return (
        <h2 className={`font-Montserrant pl-5 text-black ${props.className}`}>{props.children}</h2>
    )
}