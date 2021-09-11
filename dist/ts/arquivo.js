"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = /** @class */ (function () {
    function Carro(nome, ano, marca) {
        this.nome = nome;
        this.ano = ano;
        this.marca = marca;
    }
    return Carro;
}());
var Modelo = /** @class */ (function (_super) {
    __extends(Modelo, _super);
    function Modelo(nome, ano, marca, modelo, manutencao) {
        var _this = _super.call(this, nome, ano, marca) || this;
        _this.modelo = modelo;
        _this.manutencao = manutencao;
        return _this;
    }
    return Modelo;
}(Carro));
var c1 = new Carro('Corsa', 2006, "chevrolet");
