export default class Material{
    #id: string | null
    #nome: string
    #descricao: string
    #arquivo: string
    #link: string
    #disciplina: string
    #turma: string
    #professor: string
    #data: Date

    constructor( nome: string, descricao: string, arquivo: string, link:string,  disciplina: string, turma: string, professor: string, data: Date, id: string | null = null ){
        this.#nome = nome
        this.#descricao = descricao
        this.#arquivo = arquivo
        this.#link = link
        this.#disciplina = disciplina
        this.#turma = turma
        this.#professor = professor
        this.#data = data
        this.#id = id
    }
    static vazio() {
        return new Material('','','','','','','',new Date(0),'')
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get descricao(){
        return this.#descricao
    }
    get arquivo(){
        return this.#arquivo
    }
    get link(){
        return this.#link
    }
    get disciplina(){
        return this.#disciplina
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
}
