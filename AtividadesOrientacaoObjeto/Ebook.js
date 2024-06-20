import { Livro } from "./Livro.js";

class Ebook extends Livro{
    formatoArquivo;

    constructor(titulo, autor, ano){
        super(titulo, autor, ano)
    }
    
    exibirInfo() {
        console.log(`Título: ${this.titulo()},Autor: ${this.autor()}\nAno: ${this.ano()}\nformatoArquivo ${this.formatoArquivo}`);
    }
}
