import { Produto } from "./produto.js"
import { Estoque } from "./Estoque.js"
import { ProdutoPerecivel } from "./ProdutoPerecivel.js"

//Criando o primeiro objeto
const estoque = new Estoque();

document.addEventListener('DOMContentLoaded', () => {
    atualizarListaProdutos(estoque);

    const btnAdicionar = document.getElementById('adicionarProdutoBtn');
    btnAdicionar.addEventListener('click', () => {
        const nome = document.getElementById('nome').value;
        const preco = parseFloat(document.getElementById('preco').value);
        const quantidade = parseFloat(document.getElementById('quantidade').value);
        const dataValidade = parseFloat(document.getElementById('dataValidade').value);

        let produto;
        if(dataValidade){
           produto = new ProdutoPerecivel(Date.now(),nome,preco,quantidade,dataValidade)
        }else{
            produto = new Produto(Date.now(), nome, preco, quantidade);
        }
        estoque.adicionarProduto(produto);
        mostrarMensagem(mensagemDiv);
        atualizarListaProdutos(estoque);
        document.getElementById('produtoForm').reset();
        
    })
});

function atualizarListaProdutos(estoque){
    const produtosListados = document.getElementById('produtosListados');
    produtosListados.innerHTML = '';
    estoque.produtos.array.forEach(produto => {
        const item = document.createElement('a');
        item.setAttribute('class', 'list-group-item', 'list-group-item-action');
        item.textContent = produto.descriçao();
        produtosListados.appendChild(item);
    });
}

function mostrarMensagem(texto, tipo = 'sucess'){
    const mensagemDiv.className = `alert alert-${tipo} mt-3`;
    mensagemDiv.textContent = texto;
    document.querySelector('.container').prepend(mensagemDiv);
    setTimeout(() =>{
        mensagemDiv.remove();
    },3000);

}