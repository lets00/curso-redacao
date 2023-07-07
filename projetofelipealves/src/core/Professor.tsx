export default class Professor{
    #id: string | null
    #nome: string
    #cpf: string
    #rg: string

    constructor(nome: string, cpf: string, rg: string, id: string | null = null ){
        this.#nome = nome
        this.#cpf = cpf
        this.#rg = rg
        this.#id = id
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
}
