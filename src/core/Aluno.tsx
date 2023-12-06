export default class Aluno {
    #id: string
    #nome: string
    #data: Date
    #natural: string
    #endereco: string
    #celular: string
    #email: string
    #pai: string
    #mae: string
    #rg: string
    #cpf: string
    #mensalidade: number
    #turma: string[]
    #pagamento: boolean
    #senha: string
    #excluido: boolean

    constructor(nome: string, data: Date, natural:string, endereco: string, 
                celular: string, email: string, pai: string, mae: string, 
                rg: string, cpf: string, mensalidade: number, turma: string[],
                pagamento: boolean ,senha: string, id: string, excluido: boolean){
                this.#nome = nome
                this.#data = data
                this.#natural = natural
                this.#endereco = endereco
                this.#celular = celular
                this.#email = email
                this.#pai = pai
                this.#mae = mae
                this.#rg = rg
                this.#cpf = cpf
                this.#mensalidade = mensalidade
                this.#turma = turma
                this.#pagamento = pagamento
                this.#senha = senha
                this.#id = id
                this.#excluido = excluido
                }
    
    static vazio() {
        return new Aluno('',new Date(0),'','','','','','','','',0,[], false, '','',false)
    }
    
    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get data() {
        return this.#data
    }
    get natural() {
        return this.#natural
    }
    get endereco () {
        return this.#endereco 
    }
    get celular() {
        return this.#celular
    }
    get email() {
        return this.#email
    }
    get pai() {
        return this.#pai
    }
    get mae() {
        return this.#mae
    }
    get rg() {
        return this.#rg
    }
    get cpf() {
        return this.#cpf
    }
    get mensalidade() {
        return this.#mensalidade
    }
    get turma() {
        return this.#turma
    }
    get pagamento() {
        return this.#pagamento
    }
    set pagamento(pagamento: boolean){
        this.#pagamento = pagamento;
    }
    get senha() {
        return this.#senha
    }
    get excluido(){
        return this.#excluido
    }
}