export class Pessoa{
    constructor(id, nome, email, telefone){
        // criar atributos protegidos(protected)
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
    }

    // métodos getter
    get nome(){
        return this._nome;
    }
    get email(){
        return this._email;
    }
    get telefone(){
        return this._telefone;
    }

    // métodos setter
    set email(novoEmail){
        this._email = novoEmail;
    }
    set nome(novoNome){
        this._nome = novoNome;
    }
    set telefone(novoTelefone){
        this._telefone = novoTelefone;
    }
    descricao(){
        return `${this._nome} seu email é ${this._email} e temos o telefone${this._telefone} `;
    }
}