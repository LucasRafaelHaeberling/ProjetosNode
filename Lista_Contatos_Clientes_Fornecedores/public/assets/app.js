import { Pessoa } from "../Pessoa.js";
import { Cliente } from "../Cliente.js";
import { Fornecedor } from "../Fornecedor.js";
import { ListaContato } from "../ListaContato.js";

const listaContato = new ListaContato();
let contatoSelecionado = null;

document.addEventListener('DOMContentLoaded', () => {
    const btnAdicionar = document.getElementById('adicionarContatoBtn');
    const btnAtualizar = document.getElementById('atualizarContatoBtn');
    
    btnAdicionar.addEventListener('click', adicionarOuAtualizarContato);
    btnAtualizar.addEventListener('click', adicionarOuAtualizarContato);
    
    
    atualizarListaContatos(listaContato);
});


function adicionarOuAtualizarContato() {
    const id = contatoSelecionado ? contatoSelecionado._id : Date.now();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cnpj = document.getElementById('cnpj').value;
    const cpf = document.getElementById('cpf').value;

    if (!nome || !email || !telefone || (!cnpj && !cpf)) {
        mostrarMensagem('Por favor, preencha todos os campos.', 'danger');
        return;
    }

    let contato;
    if (cnpj) {
        contato = new Fornecedor(id, nome, email, telefone, cnpj);
    } else {
        contato = new Cliente(id, nome, email, telefone, cpf);
    }

    if (contatoSelecionado) {
        listaContato.atualizarContato(contato);
        mostrarMensagem('Contato atualizado com sucesso!');
    } else {
        listaContato.adicionarContato(contato);
        mostrarMensagem('Contato adicionado com sucesso!');
    }
    resetarFormularioEListaContato();
}

function resetarFormularioEListaContato() {
    contatoSelecionado = null;
    document.getElementById('contatoForm').reset();
    atualizarListaContatos(listaContato);
    document.getElementById('adicionarContatoBtn').classList.remove('d-none');
    document.getElementById('atualizarContatoBtn').classList.add('d-none');
}

function atualizarListaContatos(listaContato) {
    const contatosListados = document.getElementById('contatosListados');
    contatosListados.innerHTML = '';
    listaContato.contatos.forEach(contato => {
        const item = document.createElement('div');
        item.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        const texto = document.createElement('span');
        texto.textContent = contato.descricao();
        item.appendChild(texto);

        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.className = 'btn btn-info ml-2';
        btnEditar.onclick = () => selecionarContatoParaEditar(contato);

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.className = 'btn btn-danger ml-2';
        btnExcluir.onclick = () => removerContato(contato._id);
        item.appendChild(btnEditar);
        item.appendChild(btnExcluir);
        contatosListados.appendChild(item);
    });
}

function removerContato(id) {
    listaContato.removerContato(id);
    mostrarMensagem("Contato removido com sucesso!");
    atualizarListaContatos(listaContato);
}

function selecionarContatoParaEditar(contato) {
    document.getElementById('nome').value = contato._nome;
    document.getElementById('email').value = contato._email;
    document.getElementById('telefone').value = contato._telefone;
    if (contato instanceof Fornecedor) {
        document.getElementById('cnpj').value = contato._cnpj;
        document.getElementById('cnpj').classList.remove('d-none');
        document.getElementById('cpf').classList.add('d-none');
    } else {
        document.getElementById('cpf').value = contato._cpf;
        document.getElementById('cpf').classList.remove('d-none');
        document.getElementById('cnpj').classList.add('d-none');
        console.log('cpf')
    }
    document.getElementById('adicionarContatoBtn').classList.add('d-none');
    document.getElementById('atualizarContatoBtn').classList.remove('d-none');
    contatoSelecionado = contato;
}


function mostrarMensagem(texto, tipo = 'success') {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = `alert alert-${tipo} mt-3`;
    mensagemDiv.textContent = texto;
    document.querySelector('.container').prepend(mensagemDiv);
    setTimeout(() => {
        mensagemDiv.remove();
    }, 3000);
}
