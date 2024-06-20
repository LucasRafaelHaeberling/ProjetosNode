export class Usuario{
    #nome; // atributo privado para armazenar nome do usuario
    #senha; // atributo privado para armazenar senha do usuario

    constructor(nome, senha){
        this.#nome = nome;
        this.#senha = senha;
    }
    //metodo privado
    #verificarSenha(senha){
        return this.#senha === senha;
    }

    get senha(){
        return this.#senha;
    }

alterarSenha(novaSenha, senhaAtual){
    if(this.#verificarSenha(senhaAtual)){
        this.#senha = novaSenha;
        console.log('Senha alterada com sucesso')
    }else{
        console.log('Senha atual incorreta')
    }
}

resetarSenha(){
    this.#senha = 'senhaPadrao';
    console.log(`Senha do usuario ${Usuario.nome} resetada para 'senhaPadrao'`);
}

    //metodo publico para chamar quando criado o objeto
    saudar(){
        console.log(`Ola meu nome é ${this.#nome}`);
    }
}