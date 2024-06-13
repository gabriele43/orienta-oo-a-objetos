var Carro = /** @class */ (function () {
    function Carro(rodas, motor, cor, modelo, marca) {
        this.rodas = rodas;
        this.motor = motor;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
    Carro.prototype.acelerar = function () {
        console.log("vrummmmm");
    };
    Carro.prototype.freiar = function () {
        console.log("freiando");
    };
    Carro.prototype.lavar = function () {
        console.log("lavando");
    };
    return Carro;
}());
var meuCarro = new Carro(15, 2.0, 'azul', 'Lancer', 'Mitsubishi');
meuCarro.acelerar();
meuCarro.freiar();
meuCarro.lavar();
