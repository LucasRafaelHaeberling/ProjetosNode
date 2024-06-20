import { Pessoa } from "./Pessoa.js"
import { Cliente } from "./Cliente.js"
import { Fornecedor } from "./Fornecedor.js"

export class ListaContato{
    constructor(){
        this.contatos = this.carregarContatos();
    }

    adicionarContato(contato){
        this.contatos.push(contato);
        this.salvarContato();
    }

    atualizarContato(contatoAtualizado){
        const index = this.contatos.findIndex(contato => contato._id === contatoAtualizado._id);
        if(index >= 0){
            this.contatos[index] = contatoAtualizado;
            this.salvarContato();
        }
    }

    salvarContato(){
        localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }

    removerContato(id) {
        this.contatos = this.contatos.filter(contato => contato._id !== id);
        this.salvarContato();
    }

    carregarContatos(){
        const contatosData = localStorage.getItem('contatos');
        if(contatosData){
            return JSON.parse(contatosData).map(contato => {
                if(contato._cnpj){
                    return new Fornecedor(
                        contato._id,
                        contato._nome,
                        contato._email,
                        contato._telefone,
                        contato._cnpj
                        );
                }
                return new Cliente(
                    contato._id, 
                    contato._nome,
                    contato._email, 
                    contato._telefone,
                    contato._cpf
                );
            });
        }
        return [];
    }
}