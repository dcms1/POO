"use strict";
var Endereco = /** @class */ (function () {
    function Endereco(_a) {
        var rua = _a.rua, numero = _a.numero, bairro = _a.bairro, cidade = _a.cidade;
    }
    Endereco.prototype.mostrar = function (_a) {
        var rua = _a.rua, numero = _a.numero, bairro = _a.bairro, cidade = _a.cidade;
        console.log('A rua e ', rua, 'o numero', numero, 'o bairro ', bairro, 'a cidade ', cidade);
    };
    return Endereco;
}());
var Endereco1 = new Endereco({ rua: 'teste', numero: 408, bairro: 'bela vista', cidade: 'pariba' });
