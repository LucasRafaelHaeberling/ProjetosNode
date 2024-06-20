export class Produto {
    constructor(id, nome, preco, quantidade) {
        //criar atributos protected
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    //metodos getter
    get nome() {
        return this._nome;
    }

    get quantidade() {
        return this.quantidade;
    }

    get preco() {
        return this._preco;
    }

    //metodos setter
    set quantidade(novaQuantidade) {
        this._quantidade = novaQuantidade;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    set preco(novoPreco) {
        this._preco = novoPreco;
    }

    descricao() {
        return `${this._nome} custa R$${this._preco} e temos ${this._quantidade} em estoque`
    }
}