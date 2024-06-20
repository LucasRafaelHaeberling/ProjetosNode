export class Produto{
    constructor(id, nome, quantidade, preco){
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    adicionarQuantidade(qtd){
        this.quantidade += qtd;
        //this.quantidade = this.quantidade = qtd
    }
    removerQuantidade(qtd){
        if(this.quantidade >= qtd){
            this.quantidade -= qtd;
            console.log("Quantidade retirada com sucesso");    
        }else{
            console.log("Quantidade insuficiente no estoque")
        }
    }
}




