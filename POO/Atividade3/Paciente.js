class Paciente{
    constructor(nome,cpf){
        this.nome = nome;
        this.cpf =cpf;
    }
}

class Consulta extends Paciente{
    constructor(nome, cpf, data, hora, especialidade){
        super(nome, cpf);
    }
}

const paciente1 = new Consulta("lucas",132, 24.04, "18 horas", odonto);

