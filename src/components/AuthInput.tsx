interface AuthInputProps{
    label: string
    valor: any
    valorMudou: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps){
    return(
        <div>
            <label>{props.label}</label>
            <input
                type="text"
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
            />
        </div>
    )
}