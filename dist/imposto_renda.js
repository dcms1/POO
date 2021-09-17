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
/*4) Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os
atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie
uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
com saúde, crie os getter e setter com a validação. Crie uma classe filha Pessoa
Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
getter e o setter com a validação.
Regras para os cálculos
Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a
pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.
Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos
com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa
Trabalho de POO II 2
cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
14% = 56.000,00*/
var Imposto_Renda = /** @class */ (function () {
    function Imposto_Renda(nome, renda) {
        this._nome = nome;
        this._renda = renda;
    }
    Object.defineProperty(Imposto_Renda.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome == '') {
                throw new Error("Nome esta Vazio");
            }
            else {
                this.nome = nome;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Imposto_Renda.prototype, "renda", {
        get: function () {
            return this._renda;
        },
        set: function (renda) {
            if ((renda == 0) || (!renda)) {
                throw new Error("Renda nao pode ser nula");
            }
            else {
                this.renda = renda;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Imposto_Renda;
}());
var Pessoa_Fisica = /** @class */ (function (_super) {
    __extends(Pessoa_Fisica, _super);
    function Pessoa_Fisica(nome, renda, gasto_saude) {
        var _this = _super.call(this, nome, renda) || this;
        _this._gastos_saude = gasto_saude;
        return _this;
    }
    Object.defineProperty(Pessoa_Fisica.prototype, "gastos_saude", {
        get: function () {
            return this._gastos_saude;
        },
        set: function (gastos_saude) {
            if ((gastos_saude > 0) || (!gastos_saude)) {
                this._gastos_saude = gastos_saude;
            }
            else {
                throw new Error("O gasto nao deve ser nulo");
            }
        },
        enumerable: false,
        configurable: true
    });
    Pessoa_Fisica.prototype.imposto_fisica = function () {
        if (this.renda < 20000) {
            if (this.gastos_saude > 0) {
                return (this.renda * 0.15 - this._gastos_saude * 0.5);
            }
            else {
                return this.renda * 0.15;
            }
        }
        else {
            if (this.gastos_saude > 20000) {
                return (this.renda * 0.25 - this._gastos_saude * 0.5);
            }
            else {
                return this.renda * 0.25;
            }
        }
    };
    return Pessoa_Fisica;
}(Imposto_Renda));
var Pessoa_juridica = /** @class */ (function (_super) {
    __extends(Pessoa_juridica, _super);
    function Pessoa_juridica(nome, renda, numero_funci) {
        var _this = _super.call(this, nome, renda) || this;
        _this._numero_funci = numero_funci;
        return _this;
    }
    Object.defineProperty(Pessoa_juridica.prototype, "numero_funci", {
        get: function () {
            return this._numero_funci;
        },
        set: function (numero_funci) {
            if ((numero_funci > 0) || (!numero_funci)) {
                this._numero_funci = numero_funci;
            }
            else {
                throw new Error("O numero de funcionarios deve ser maior que zero");
            }
        },
        enumerable: false,
        configurable: true
    });
    Pessoa_juridica.prototype.imposto_juridico = function () {
        if (this.numero_funci >= 10) {
            return this.renda * 0.14;
        }
        else {
            return this.renda * 0.16;
        }
    };
    return Pessoa_juridica;
}(Imposto_Renda));
var pessoaf = new Pessoa_Fisica("Daniel", 1000, 500);
var calculo = pessoaf.imposto_fisica();
console.log(calculo);
var pessoaj = new Pessoa_juridica('DC', 400000, 10);
var jud = pessoaj.imposto_juridico();
console.log(jud);
// try{
//     pessoaf.nome = "Daniel";
//     pessoaf.renda = 10000;
//     pessoaf.gastos_saude=5000;
//     pessoaj.nome = "ABC";
//     pessoaj.renda=100000;
//     pessoaj.numero_funci=5;
// }catch(err){
//     console.log(err.message);
// }
