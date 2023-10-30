export default class Teste{
    #email: string
    #senha: string

        constructor(email: string, senha: string){
            this.#email = email
            this.#senha = email
        }

        static vazio(){
            return new Teste('','')
        }

        get email(){
            return this.#email
        }

        get senha(){
            return this.#senha
        }


    
}