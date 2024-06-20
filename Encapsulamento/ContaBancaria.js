/** 
 * Encapsulamento é a pratica de ocultar detalhes internos de uma classe e expor apenas o que é necessario
 * para o uso externo. Isso é feito atraves de uso de propriedades e metodos privados,
 * garantindo que o estado interno do objeto nao possa ser modificado diretamente de fora da classe.
 * 
 * Explicaçao: Nesse exemplo, a classe ContaBancaria tem uma propriedade privada #saldo que nao pode ser 
 * acessada ou modificada diretamente de fora da classe.
 * Metodos públicos como depositar, sacar e visualizarSaldo permitem interagir com o saldo de maneira 
 * de maneira controlada, garantindo que apenas operaçoes validaa possam ser realizadas, como depositar
 * um valor positivo ou sacar um valor que seja menor ou igual ao saldo atual.
 * Isso exemplifica o encapsulamento, protegendo o estado interno do objeto.
*/

class ContaBancaria{
    #saldo; //propriedade privada
    constructor(saldoinicial){
        this.#saldo = saldoinicial;
    }
    //metodo set (Atribuir valores para meu produto privado)
    depositar(valor){
        //para conseguir depositar valor ele precisa ser maior que zero
        if(valor > 0){
             this.#saldo += valor;
             console.log(`Deposito de r$${valor} efetuado com sucesso.`);     
        }else{
            console.log("Valor de deposito deve ser positivo.");
        }
    }
    sacar(valor){
        if(valor <= this.#saldo){
             this.#saldo -= valor;
             console.log(`Saque de R$${valor} efetuado com sucesso.`);
       }else{
            console.log("Valor de saque ultrapassa o valor total da sua conta")
       }
}
    //metodo get (para recuperar o saldo do atributo privado)
    visualizarSaldo(){
        console.log(`Saldo Atual: R$${this.#saldo}`);
    }
}

const minhaConta = new ContaBancaria(500);
minhaConta.visualizarSaldo();
minhaConta.depositar(1000);
minhaConta.sacar(1100);
minhaConta.visualizarSaldo();

