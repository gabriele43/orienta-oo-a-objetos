var rl = require( 'readline - sync')
export class Carro{
    public tanque: number
    public km:number
    public marca:string

    constructor(tanque:number,km:number,marca:string){
        this.tanque = tanque
        this.km = km
        this.marca = marca
    }

    public andar():void{
        let distancia = rl.question (' qual distancia voce quer percorrer em km?:')
        let combustivel =this.tanque - (this.km/20)
        if(combustivel < 0){
            console.log('nao é possivel percorrer essa distancia')
        } else{
            this.tanque -= combustivel
            console.log('voce percorreu', distancia, 'km')
        }
    }

    getCarro():void{
        console.log(`o ${this.marca} tem ${this.tanque} litros no tanque e percorreu por ${this.km} km.`)
    }

    setCarro():void{
        let tanqueUpdate = rl.question('insira a capacidade do tanque:')
        let kmUpdate = rl.question('insira a km do carro')
        let marcaUpdate = rl.question('insira a marca do carro') 

        this.tanque = tanqueUpdate
        this.km = kmUpdate
        this.marca = marcaUpdate
    }

    public obtergasolina():number{
        return this.tanque
    }

    public adicionargasolina():void{
        let abastecer = rl.question('quantas litros de gasolina voce quer abastercer?')

        this.tanque += abastecer
    }
        
    }

    

