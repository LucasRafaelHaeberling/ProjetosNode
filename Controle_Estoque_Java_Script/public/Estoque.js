import { Produto } from "./produto.js";
import { ProdutoPerecivel } from "./ProdutoPerecivel.js"

export class Estoque {
    constructor() {
        this.produtos = this.carregarProdutos();
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.salvarProdutos();
    }

    salvarProdutos() {
        localStorage.setItem('produtos', this.produtos)
    }

    carregarProdutos() {
        const produtosData = localStorage.getItem('produtos');
        if (produtosData) {
            return JSON.parse(produtosData).map(produto => {
                if (produto._datavalidade) {
                    return new ProdutoPerecivel(produto._id, produto._nome, produto._preco, produto._quantidade, produto._datavalidade)
                };
                return new Produto(produto._id, produto._nome, produto._preco, produto._quantidade)
            }

            );
        }
    }
} 