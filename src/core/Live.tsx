export default class Material{
    #id: string | null
    #nome: string
    #turma: string
    #professor: string
    #data: Date
    #link: string
    #excluido: boolean

    constructor( nome: string, turma: string, professor: string, data: Date, link: string, id: string | null = null, excluido: boolean ){
        this.#nome = nome
        this.#turma = turma
        this.#professor = professor
        this.#data = data
        this.#link = link
        this.#id = id
        this.#excluido = excluido
    }
    static vazio() {
        return new Material('','','',new Date(0),'','',false)
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get turma(){
        return this.#turma
    }
    get professor(){
        return this.#professor
    }
    get data(){
        return this.#data
    }
    get link(){
        return this.#link
    }
    get excluido(){
        return this.#excluido
    }
}
