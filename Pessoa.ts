class pessoa{
    nome:string
    idade: number

    constructor(nome:string,idade:number){
        this.nome = nome
        this.idade = idade //novapessoa.idade = 26
    }

    comprimentar():void{
        console.log(`Olá, prazer em te conhecer, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}
class crianca extends pessoa{
    comprimentar():void{
        console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos. Sou uma criança`);
    }
}

class adulto extends pessoa{
    comprimentar():void{
        console.log(`ola, meu nome é ${this.nome} e tenho ${this.idade} anos. sou um adulto`)
    }
}

class idoso extends pessoa{
    comprimentar():void{
        console.log (`ola, meu nome é ${this.nome} e tenho ${this.idade} anos. sou um idoso`)
    }
}

let kid = new crianca("enzo", 13)
let adult = new adulto("adao", 23)
let oldman = new idoso("dorival", 75)




