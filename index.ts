var readlineSync = require('readline-sync')

class Carro{
    rodas: number
    motor: number
    cor: string
    modelo: string
    marca: string

    constructor(rodas:number, motor:number, cor:string, modelo:string, marca: string){
        this.rodas = rodas
        this.motor = motor
        this.cor = cor
        this.modelo = modelo
        this.marca = marca
    }

    acelerar(){
        console.log("vrummmmm")
    }
    freiar(){
        console.log("freiando")
    }
    lavar(){
        console.log("lavando")
    }
    dirigir(){
        console.log(`estou dirigindo meu ${this.marca} ${this.modelo}`);
    }
}


//var rodasCarro = readlineSync.question('')
//exemplo readline:
var rodas: number = Number( readlineSync.question('qual o aro das rodas do seu carro?'))
var motor: number = Number(readlineSync.question('qual o motor do seu carro?'))
var cor:string = String (readlineSync.question('qual a pintura do carro?'))
var modelo:string = String(readlineSync.question('qual o modelo do carro?'))
var marca:string = String(readlineSync.question('qual a marca do seu carro?'))

const novoCarro = new Carro(rodas,motor,cor,modelo,marca)

const meuCarro = new Carro(15, 2.0, 'azul', 'Lancer', 'Mitsubishi')

meuCarro.acelerar()
meuCarro.freiar()
meuCarro.lavar()
meuCarro.dirigir()