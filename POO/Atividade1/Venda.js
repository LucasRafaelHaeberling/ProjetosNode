import { ItemVenda } from './ItemVenda.js'
import { Produto } from './Produto.js'

export class Venda {
    constructor(){
        this.itens = [];
    }

    adicionarItem(item){
        this.itens.push(item);
    }

    calcularTotal(){
        return this.itens.reduce((total, item) => total + item.calcularSubTotal(), 0)
    }
}

//EX de uso 
const produto1 = new Produto(5, "Camiseta", 10, 130.00);
const item1 = new ItemVenda(produto1, 30);
const produto2 = new Produto(5, "Meia", 10, 50.00);
const item2 = new ItemVenda(produto2, 20);


const venda = new Venda();
venda.adicionarItem(item1);


console.log(venda.calcularTotal());