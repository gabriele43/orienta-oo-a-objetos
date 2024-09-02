var leitor = require('readline-sync')
class aluno{
    nome:string
    notas:Array<number>

    constructor(nome:string){
        this.nome = nome
        this.notas = []
        
    }

    registroNotas():void{
        let nota1: number = leitor.questionInt("insira a primeira nota:")
        let nota2 : number = leitor.questionInt("insira  a segunda nota:")

        this.notas.push(nota1)
        this.notas.push(nota2)
    }

    calcularMedia():void{
        let media = (this.notas[0] + this.notas[1])/2
        console.log(`a media dos valores é ${media}`);
    }
}

let nomeAluno = leitor.question("qual o nome do aluno que gostaria de verificar a media?")

let alunoNovo = new aluno(nomeAluno)

alunoNovo.registroNotas()
alunoNovo.calcularMedia()