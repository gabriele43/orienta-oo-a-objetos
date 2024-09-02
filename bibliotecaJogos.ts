import { Jogo } from "./Jogo"

export class BibliotecaDeJogos{
    public jogos: Jogo[] = []

    public adicionarJogo(jogo: Jogo): void{
        this.jogos.push(jogo)
    }

    public removerJogo(tituloJogo: string): void{
        this.jogos = this.jogos.filter(jogo => jogo.titulo !== tituloJogo)
    }

    public listarJogos(): void{
        console.log(this.jogos)
    }
}