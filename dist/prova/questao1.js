"use strict";
var Produtos = /** @class */ (function () {
    function Produtos(_quantidade, _valor, _produto) {
        this._quantidade = _quantidade;
        this._valor = _valor;
        this._produto = _produto;
    }
    Object.defineProperty(Produtos.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if ((quantidade == 0) || (!quantidade)) {
                throw new Error("A quantidade pode ser vazia");
            }
            else {
                this._quantidade = quantidade;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (valor) {
            if ((valor == 0) || (!valor)) {
                throw new Error("O valor pode ser vazio");
            }
            else {
                this._valor = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "produto", {
        get: function () {
            return this._produto;
        },
        set: function (produto) {
            if ((produto == '') || (!produto)) {
                throw new Error("O produto pode ser vazio");
            }
            else {
                this._produto = produto;
            }
        },
        enumerable: false,
        configurable: true
    });
    Produtos.prototype.desconto = function () {
        if (this.quantidade <= 10) {
            return (this.valor - (this.quantidade * this._valor * 0));
        }
        else if (this.quantidade <= 20) {
            return (this.valor - (this.quantidade * this._valor * 0, 10));
        }
        else if (this.quantidade <= 50) {
            return (this.valor - (this.quantidade * this._valor * 0, 20));
        }
        else if (this.quantidade > 50) {
            return (this.valor - (this.quantidade * this._valor * 0, 25));
        }
        return 0;
    };
    return Produtos;
}());
var produto1 = new Produtos(10, 50, 'Mouse');
var desconto = produto1.desconto();
console.log("O produto " + produto1.produto + " de pre\u00E7o " + produto1.valor + " quantidade comprada\nde " + produto1.quantidade + " teve o desconto de " + produto1.desconto() + " e o valor pago foi de " + (produto1.valor * produto1.quantidade - produto1.desconto()));
