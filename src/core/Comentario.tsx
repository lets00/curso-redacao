export default class Material{
    #id: string | null
    #idMaterial: string
    #texto: string
    #estrelas: number
    #idUsuario: string
    #excluido: boolean

    constructor( idMaterial: string, texto: string, estrelas: number, idUsuario: string, id: string | null = null, excluido: boolean ){
        this.#idMaterial = idMaterial
        this.#texto = texto
        this.#estrelas = estrelas
        this.#idUsuario = idUsuario
        this.#id = id
        this.#excluido = excluido
    }
    static vazio() {
        return new Material('','',0,'','',false)
    }

    get id(){
        return this.#id
    }
    get idMaterial(){
        return this.#idMaterial
    }
    get texto(){
        return this.#texto
    }
    get estrelas(){
        return this.#estrelas
    }
    get idUsuario(){
        return this.#idUsuario
    }
    get excluido(){
        return this.#excluido
    }
}
