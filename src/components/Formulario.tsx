import Entrada from "./Entrada";
import { useState } from "react";
import Aluno from "@/core/Aluno";
import Botao from "./Botao";
import DatePicker from "./DatePicker";

interface FormularioProps{
    aluno: Aluno
}
export default function Formulario(props: FormularioProps){
    const id = props.aluno?.id
    const [nome, setNome] = useState(props.aluno?.nome ?? '')
    const [data, setData] = useState(props.aluno?.data ?? '')
    const [natural, setNatural] = useState(props.aluno?.natural ?? '')
    const [endereco, setEndereco] = useState(props.aluno?.endereco ?? '')
    const [celular, setCelular] = useState(props.aluno?.celular ?? '')
    const [email, setEmail] = useState(props.aluno?.email ?? '')
    const [pai, setPai] = useState(props.aluno?.pai ?? '')
    const [mae, setMae] = useState(props.aluno?.mae ?? '')
    const [rg, setRg] = useState(props.aluno?.rg ?? '')
    const [cpf, setCpf] = useState(props.aluno?.cpf ?? '')
    const [senha, setSenha] = useState(props.aluno?.senha ?? '')
    
    return (
        <div>
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} placeholder="Digite seu nome COMPLETO"/>
            <DatePicker titulo="Data de Nascimento"/>
            <Entrada texto="Naturalidade ( Cidade/Estado )" valor={natural} valorMudou={setNatural} placeholder="Digite seu Estado ( ex: PE )"/>
            <Entrada texto="Endereço ( Rua, Nº, Bairro)" valor={endereco} valorMudou={setEndereco} placeholder="Digite sua rua, número e cidade"/>
            <Entrada texto="Número de celular (com DDD)" valor={celular} valorMudou={setCelular} placeholder="(**)****-****"/>
            <Entrada texto="E-mail" valor={email} valorMudou={setEmail} placeholder="Digite seu e-mail"/>
            <Entrada texto="Senha" valor={senha} valorMudou={setSenha} placeholder="Digite sua senha"/>
            <Entrada texto="Nome do Pai" valor={pai} valorMudou={setPai} placeholder="Digite o nome do seu pai"/>
            <Entrada texto="Nome da Mãe" valor={mae} valorMudou={setMae} placeholder="Digite o nome da sua mãe"/>
            <h2 className="font-Montserrant">Documentação</h2><br />
            <Entrada texto="RG" valor={rg} valorMudou={setRg} placeholder="Digite seu RG"/>
            <Entrada texto="CPF" valor={cpf} valorMudou={setCpf} placeholder="Digite seu CPF"/>

            <label className="font-Montserrant">Data de preferência para pagamento</label>
            <div className="flex flex-row items-center gap-6 pt-4">
                <div className="flex items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-pink-600 bg-gray-100
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dia 10</label>
                </div>
                <div className="flex items-center">
                    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-pink-600 bg-gray-100
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dia 15</label>
                </div>
            </div>

            <div className="pt-28 flex-col">
                <div className="flex items-center mb-6">
                    <input id="default-checkbox" type="checkbox" value="" 
                    className="w-4 h-4 text-pink-600 bg-gray-100  rounded-xl
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-900"><a href="" className="hover:underline">Termos de uso</a></label>
                </div>
                <Botao className="px-12">Próximo</Botao>
            </div>
        </div>
    )
}