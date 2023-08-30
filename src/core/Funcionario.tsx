export default class Funcionario{
    #id: string | null
    #nome: string
    #cpf: string
    #rg: string
    #celular: string
    #email: string
    #senha: string

    constructor( nome: string, cpf: string, rg: string, celular: string, email: string, senha: string, id: string | null = null ){
        this.#nome = nome
        this.#cpf = cpf
        this.#rg = rg
        this.#celular = celular
        this.#email = email
        this.#senha = senha
        this.#id = id
    }
    static vazio() {
        return new Funcionario('','','','','','','')
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get cpf(){
        return this.#cpf
    }
    get rg(){
        return this.#rg
    }
    get celular(){
        return this.#celular
    }
    get email(){
        return this.#email
    }
    get senha(){
        return this.#senha
    }
}
