import { Usuario } from "./Usuario.js";

export class Administrador extends Usuario{
    constructor(nome, senha){
        super(nome, senha); // chama o construtor da classe pai/superclasse/base
    }

    resetarSenhaUsuario(usuario){
        usuario.resetarSenha();
    }
}