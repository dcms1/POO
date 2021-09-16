"use strict";
/*3) Crie uma classe Fatura com os atributos números, descrição, quantidade
Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
comprada pelo preço.*/
var Fatura = /** @class */ (function () {
    function Fatura(numero, descricao, quantidade, preco) {
        this.numero = numero;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    Fatura.prototype.valor_total = function () {
        var valor_total = this.quantidade * this.preco;
        return valor_total;
    };
    return Fatura;
}());
var fatura1 = new Fatura(123456, 'conta de luz', 2, 500);
console.log(fatura1);
console.log('O valor total da fatura é ', fatura1.valor_total());
