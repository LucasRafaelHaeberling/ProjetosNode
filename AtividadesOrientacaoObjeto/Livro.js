export class Livro{
    #titulo;
    #autor;
    #ano;

    constructor(titulo, autor, ano){
        this.#titulo = titulo;
        this.#ano = ano;
        this.#autor = autor;
    }

    get titulo(){
        return this.#titulo;
    }

    set titulo(novoTitulo){
        this.#titulo = 'novoTitulo';
    }

    get autor(){
        return this.#autor;
    }

    set autor(novoAutor){
        this.#autor = 'novoAutor';
    }
    
    get ano(){
        return this.#ano;
    }

    set ano(novoAno){
        this.#ano = 'novoAno'
    }
    exibirInfo() {
        console.log(`Título: ${this.#titulo}\nAutor: ${this.#autor}\nAno: ${this.#ano}`);
    }
}


// Atividade 1: Criar uma Classe Simples
const livro1 = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);

// Atividade 2: Instanciar Objetos
const livro2 = new Livro("1984", "George Orwell", 1949);

// Chamar o método exibirInfo para cada objeto
livro1.exibirInfo();
console.log("------------------");
livro2.exibirInfo();