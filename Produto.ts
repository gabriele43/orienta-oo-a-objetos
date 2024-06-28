var leitor = require('readline-sync')
class Produto{
    nome:string
    preço:number
    marca:string
    qualidade:string
    vida_util:number

    constructor(nome:string,preço:number,marca:string,qualidade:string,vida_util:number){
        this.nome = nome
        this.preço = preço
        this.marca = marca
        this.qualidade = qualidade
        this.vida_util = vida_util
    }
}

class Venda{
    produto:string
    quantidade:number
    valor_total:number
    data:number
    prazo:number

    constructor(produto:string,quantidade:number,valor_total:number,data:number,prazo:number){
        this.produto = produto
        this.quantidade = quantidade
        this.valor_total = valor_total
        this.data = data
        this.prazo = prazo
    }
}

let novoProduto = new Produto("",0,"","",0)
let novaVenda = new Venda("",0,0,0,0)

