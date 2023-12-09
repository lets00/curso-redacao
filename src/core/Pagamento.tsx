export default class Material{
    #id: string | null
    #idTurma: string
    #idAluno: string
    #descricao: string
    #valor: number
    #prazo: Date
    #dataPago: Date
    #excluido: boolean

    constructor( idAluno: string, idTurma: string, descricao: string, valor: number, prazo: Date, dataPago: Date, id: string | null = null, excluido: boolean ){
        this.#idAluno = idAluno
        this.#idTurma = idTurma
        this.#descricao = descricao
        this.#valor = valor
        this.#prazo = prazo
        this.#dataPago = dataPago
        this.#id = id
        this.#excluido = excluido
    }
    static vazio() {
        return new Material('','','',0,new Date(0),new Date(0),'',false)
    }

    get id(){
        return this.#id
    }
    get idAluno(){
        return this.#idAluno
    }
    get idTurma(){
        return this.#idTurma
    }
    get descricao(){
        return this.#descricao
    }
    get valor(){
        return this.#valor
    }
    get prazo(){
        return this.#prazo
    }
    get dataPago(){
        return this.#dataPago
    }
    get excluido(){
        return this.#excluido
    }
}
