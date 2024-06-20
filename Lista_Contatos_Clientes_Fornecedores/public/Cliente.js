import { Pessoa } from "./Pessoa.js"

export class Cliente extends Pessoa{
    constructor(id, nome, email, telefone, cpf){
        super(id, nome, email, telefone);
        this._cpf = cpf;
    }
    descricao(){
        `${super.descricao()} seu CPF é ${this._cpf}`
    }
}