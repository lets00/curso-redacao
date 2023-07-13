import Formulario from "@/components/Formulario";
import Image from  'next/image';

export default function Cadastro(){

    return (
        <div className="flex flex-row justify-center">
            <div className="bg-gradient-to-t from-pink-800 to-pink-400 text-white
                            w-2/5 p-20 h-fit">
                    <h3 className="text-white font-Montserrant">Sua vaga será garantida a partir do preenchimento e do pagamento do boleto, caso você não bolsista.</h3><br />
                    <h3 className="text-white font-Montserrant">Se você ainda não tem 18 anos, é necessário que um responsável preencha o campo "Dados do responsável"</h3>
                </div>
            <div className="bg-white w-2/5 p-16 pt-20 ">
                <Formulario/>
            </div>
        </div>
    )
}