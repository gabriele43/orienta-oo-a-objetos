let rl = require('readline-sync')

export interface JogoInterface{
    titulo: string
    genero: string
    classificacaoEtaria: number
    getJogo(): void
    setJogo(): void
}

export class Jogo implements JogoInterface{
    public titulo: string
    genero: string
    classificacaoEtaria: number

    constructor(tituloJogo: string, generoJogo: string, classificacaoJogo: number){
        this.titulo = tituloJogo
        this.genero = generoJogo
        this.classificacaoEtaria = classificacaoJogo
    }

    public getJogo(): void{
        console.log(`Titulo: ${this.titulo}, Genero: ${this.genero}, Classificação: ${this.classificacaoEtaria}`)
    }

    public setJogo(): void{
        let tituloJogo = rl.question("Insira o título do jogo: ")
        let generoJogo = rl.question("Insira o gênero do jogo: ") 
        let classificacaoJogo = rl.questionInt("Insira a classificação do jogo: ")

        this.titulo = tituloJogo
        this.genero = generoJogo
        this.classificacaoEtaria = classificacaoJogo
    }
}

export class JogoEletronico extends Jogo implements JogoInterface{
    protected plataforma: string

    constructor(tituloJogo: string, generoJogo: string, classificacaoJogo: number, plataformaJogo: string){

        super(tituloJogo, generoJogo, classificacaoJogo)

        this.plataforma = plataformaJogo
    }

    public getJogoEletronico(): void{
        console.log(`Titulo: ${this.titulo}, Genero: ${this.genero}, Classificação: ${this.classificacaoEtaria}, Plataforma: ${this.plataforma}`)
    }

    public setJogoEletronico(): void{
        let tituloJogo = rl.question("Insira o título do jogo: ")
        let generoJogo = rl.question("Insira o gênero do jogo: ") 
        let classificacaoJogo = rl.questionInt("Insira a classificação do jogo: ")
        let plataformaJogo = rl.question("Insira a plataforma do jogo: ")

        this.titulo = tituloJogo
        this.genero = generoJogo
        this.classificacaoEtaria = classificacaoJogo
        this.plataforma = plataformaJogo
    }
}

export class JogoDeTabuleiro extends Jogo implements JogoInterface{
    public numJogadores: number

    constructor(tituloJogo: string, generoJogo: string, classificacaoJogo: number, numJogadoresJogo: number){

        super(tituloJogo, generoJogo, classificacaoJogo)

        this.numJogadores = numJogadoresJogo
    }

    public getJogoDeTabuleiro(): void{
        console.log(`Titulo: ${this.titulo}, Genero: ${this.genero}, Classificação: ${this.classificacaoEtaria}`)
    }

    public setJogoDeTabuleiro(): void{
        let tituloJogo = rl.question("Insira o título do jogo: ")
        let generoJogo = rl.question("Insira o gênero do jogo: ") 
        let classificacaoJogo = rl.questionInt("Insira a classificação do jogo: ")
        let numJogadoresJogo = rl.question("Insira o num. de jogadores: ")

        this.titulo = tituloJogo
        this.genero = generoJogo
        this.classificacaoEtaria = classificacaoJogo
        this.numJogadores = numJogadoresJogo
    }
}