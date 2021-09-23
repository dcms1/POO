"use strict";
var Funcionarios = /** @class */ (function () {
    function Funcionarios(_nome, _salario_hora, _dias_trabalhados, _total_faltas) {
        this._nome = _nome;
        this._salario_hora = _salario_hora;
        this._dias_trabalhados = _dias_trabalhados;
        this._total_faltas = _total_faltas;
    }
    Object.defineProperty(Funcionarios.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "salario_hora", {
        get: function () {
            return this._salario_hora;
        },
        set: function (salario_hora) {
            this._salario_hora = salario_hora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "dias_trabalhados", {
        get: function () {
            return this._dias_trabalhados;
        },
        set: function (dias_trabalhados) {
            this._dias_trabalhados = dias_trabalhados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "total_faltas", {
        get: function () {
            return this._total_faltas;
        },
        set: function (total_faltas) {
            this._total_faltas = total_faltas;
        },
        enumerable: false,
        configurable: true
    });
    Funcionarios.prototype.salario_bruto = function () {
        return this.salario_hora * this.dias_trabalhados;
    };
    Funcionarios.prototype.PLR = function () {
        if (this.total_faltas == 0) {
            return this.salario_bruto();
        }
        else if (this.total_faltas == 1) {
            return this.salario_bruto() * 0.94;
        }
        else if (this.total_faltas == 2) {
            return this.salario_bruto() * 0.92;
        }
        else if (this.total_faltas == 3) {
            return this.salario_bruto() * 0.90;
        }
        else if (this.total_faltas == 1) {
            return this.salario_bruto() * 0.88;
        }
        else if (this.total_faltas >= 5) {
            return 0;
        }
        return 0;
    };
    Funcionarios.prototype.desconto = function () {
        return this.salario_bruto() * 0.05;
    };
    Funcionarios.prototype.salario_liquido = function () {
        return (this.salario_bruto() - this.desconto() + this.PLR());
    };
    return Funcionarios;
}());
var funcionario1 = new Funcionarios('Daniel', 50, 21, 0);
console.log("O funcion\u00E1rio de nome " + funcionario1.nome + " tem o sal\u00E1rio bruto de " + funcionario1.salario_bruto() + ", teve " + funcionario1.total_faltas + " falta(s) e sua PLR foi de " + funcionario1.PLR());
console.log("O funcion\u00E1rio de nome " + funcionario1.nome + " tem o sal\u00E1rio bruto de " + funcionario1.salario_bruto() + ", o desconto de " + funcionario1.desconto() + ", a PLR de " + funcionario1.PLR() + " e o sal\u00E1rio l\u00EDquido de " + funcionario1.salario_liquido());
