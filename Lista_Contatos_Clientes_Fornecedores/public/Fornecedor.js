import { Pessoa } from "./Pessoa.js"

export class Fornecedor extends Pessoa{
    constructor(id, nome, email, telefone, cnpj){
        super(id, nome, email, telefone);
        this._cnpj = cnpj;
    }
    descricao(){
        return `${super.descricao()} seu CNPJ é ${this._cnpj}`
    }
}