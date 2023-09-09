interface CheckBoxProps{
    titulo: string
    opcoes: string[]
}

export default function Checkbox(props: CheckBoxProps){
    return (
        <div className="text-black">
            <h3 className="font-LeagueSpartan ml-9 mt-2">{props.titulo}</h3>
            <section className="flex flex-row items-center gap-6 ml-10">
                {props.opcoes.map((opcao, index) => (
                    <div key={index} className="flex items-center">
                        <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" className="w-4 h-4"/>
                        <label htmlFor="default-checkbox-1" className="ml-2 text-sm text-gray-900 dark:text-gray-300">{opcao}</label>
                    </div>
                ))}
            </section>
        </div>
    )
}