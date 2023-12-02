export default class Material{
    #id: string | null
    #idTurma: string
    #idAluno: string
    #descricao: string
    #valor: number
    #data: Date
    #excluido: boolean

    constructor( idAluno: string, idTurma: string, descricao: string, valor: number, data: Date, id: string | null = null, excluido: boolean ){
        this.#idAluno = idAluno
        this.#idTurma = idTurma
        this.#descricao = descricao
        this.#valor = valor
        this.#data = data
        this.#id = id
        this.#excluido = excluido
    }
    static vazio() {
        return new Material('','','',0,new Date(0),'',false)
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
    get data(){
        return this.#data
    }
    get excluido(){
        return this.#excluido
    }
}
