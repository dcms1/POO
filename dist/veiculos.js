"use strict";
/*2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
quantidade de dias. Crie os getters e setters. No setters crie validações para não
aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
zero. Crie um método passeio para receber a quantidade de dias e o valor da
locação. O sistema calcule o total que será a multiplicação da quantidade de dias
pelo valor da locação.*/
var Veiculos = /** @class */ (function () {
    function Veiculos(_modelo, _marca, _ano, _valor_locacao, _qts_dias) {
        this._modelo = _modelo;
        this._marca = _marca;
        this._ano = _ano;
        this._valor_locacao = _valor_locacao;
        this._qts_dias = _qts_dias;
    }
    Object.defineProperty(Veiculos.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            if ((modelo == '') || (!modelo)) {
                throw new Error("O valo nao pode ser vazio");
            }
            else {
                this._modelo = modelo;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            if ((marca == '') || (!marca)) {
                throw new Error("O valo nao pode ser vazio");
            }
            else {
                this._marca = marca;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "valor_locacao", {
        get: function () {
            return this._valor_locacao;
        },
        set: function (valor_locacao) {
            if ((valor_locacao == 0) || (!valor_locacao)) {
                throw new Error("O valo nao pode ser zero");
            }
            else {
                this._valor_locacao = valor_locacao;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "qts_dias", {
        get: function () {
            return this._qts_dias;
        },
        set: function (qts_dias) {
            if ((qts_dias == 0) || (!qts_dias)) {
                throw new Error("O valo nao pode ser zero");
            }
            else {
                this._qts_dias = qts_dias;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "modanoelo", {
        set: function (ano) {
            if ((ano == 0) || (!ano)) {
                throw new Error("O valo nao pode ser zero");
            }
            else {
                this._ano = ano;
            }
        },
        enumerable: false,
        configurable: true
    });
    Veiculos.prototype.valor_total = function () {
        var valor_total = this.qts_dias * this.valor_locacao;
        return valor_total;
    };
    return Veiculos;
}());
try {
    var veiculo1 = new Veiculos('corsa', 'chevrolet', 2006, 100, 3);
    console.log(veiculo1);
    console.log('O valor total a ser pago é', veiculo1.valor_total());
}
catch (error) {
    // console.log(error.message);
}
