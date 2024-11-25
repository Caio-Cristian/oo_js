// Classe base (abstração)
class Pessoa {
    constructor(nome, idade, genero) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }

    // Método para exibir informações gerais
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do gênero ${this.genero}.`;
    }
}

// Subclasse Aluno
class Aluno extends Pessoa {
    constructor(nome, idade, genero, curso, matricula) {
        super(nome, idade, genero); // Chama o construtor da classe base
        this.curso = curso;
        this.matricula = matricula;
    }

    // Método específico da subclasse
    estudar() {
        return `${this.nome} está estudando ${this.curso}.`;
    }
}

// Subclasse Professor
class Professor extends Pessoa {
    constructor(nome, idade, genero, disciplina, salario) {
        super(nome, idade, genero); // Chama o construtor da classe base
        this.disciplina = disciplina;
        this.salario = salario;
    }
    // Método específico da subclasse
    ensinar() {
        return `${this.nome} está ensinando a disciplina ${this.disciplina}.`;
    }

    // Método para exibir o salário do professor
    mostrarSalario() {
        return `${this.nome} tem um salário de R$ ${this.salario}.`;
    }
}

// Subclasse Funcionario
class Funcionario extends Pessoa {
    constructor(nome, idade, genero, cargo, departamento) {
        super(nome, idade, genero); // Chama o construtor da classe base
        this.cargo = cargo;
        this.departamento = departamento;
    }

// Método específico da subclasse
    trabalhar() {
        return `${this.nome} trabalha como ${this.cargo} no departamento de ${this.departamento}.`;
    }
}

// Instâncias de objetos

const aluno1 = new Aluno("Caio Marques", 21, "Masculino", "Ciências da Computação", "20251001");
const professor1 = new Professor("Maria Silva", 40, "Feminino", "Matemática", 5000);
const funcionario1 = new Funcionario("João Souza", 35, "Masculino", "Secretário", "Administração");

// Exibindo os resultados

console.log(aluno1.apresentar());  // Da classe base
console.log(aluno1.estudar());     // Da subclasse Aluno

console.log(professor1.apresentar());  // Da classe base
console.log(professor1.ensinar());    // Da subclasse Professor
console.log(professor1.mostrarSalario()); // Da subclasse Professor

console.log(funcionario1.apresentar());  // Da classe base
console.log(funcionario1.trabalhar());  // Da subclasse Funcionario