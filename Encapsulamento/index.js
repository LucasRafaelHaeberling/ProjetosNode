import { Administrador } from "./Administrador.js";
import { Usuario } from "./Usuario.js";

const adm = new Administrador("usuario1", "123456");
const user = new Usuario("usuarioComum", "123qqq");

adm.saudar();
user.saudar();

adm.resetarSenhaUsuario(user);

user.alterarSenha("123qwe", "s123qqq");

console.log(user.senha);