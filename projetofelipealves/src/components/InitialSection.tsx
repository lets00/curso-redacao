import Image from "next/image"

interface InitialSectionProps{
    titulo: string
    img: string
    children: any
    ordem: boolean
}

export default function InitialSection(props: InitialSectionProps){
    return (
        <div className="pb-20">
            <section className={props.ordem == true ? 'flex flex-row-reverse gap-20 items-center pt-10' : 'flex flex-row gap-20 items-center pt-10'}>
            <div>
                <h1 className="text-4xl font-LeagueSpartan">{props.titulo}</h1>
                <h3 className="text-2xl">{props.children}</h3>
            </div>
            <div className="flex items-center">
                <div className="rounded-full h-72 w-72">
                <Image src={props.img} width='288' height='288' alt="imagem do curso" className="rounded-full"/>
                </div>
            </div>
            </section>
        </div>
    )
}