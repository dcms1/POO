"use strict";
/* 6 Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
venda. Crie os getters e setters e as validações. Crie um método desconto para
calcular 8% do salário.
Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
região for sul a comissão será de 10% sobre o valor da venda. Se a região for
sudeste a comissão será de 12% sobre o valor da venda, se a região for centrooeste a comissão será de 14% sobre o valor da venda, se a região for norte a
comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão
será de 17% sobre o valor da venda. Crie o método para calcular o salário total que
será o salario mais a comissão.
Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa,
total de funcionários, crie os getters, setters e as suas validações. Crie um método
para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da
comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual
a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da
venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será
de 6% sobre o valor da venda. Crie um método salario Total que será a soma do
salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que
100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100.*/
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
var Vendedores = /** @class */ (function () {
    function Vendedores(nome, salario, valor_venda) {
        this._nome = nome;
        this._salario = salario;
        this._valor_venda = valor_venda;
    }
    Object.defineProperty(Vendedores.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if ((nome == '') || (!nome)) {
                throw new Error("O Nome nao pode ser nulo");
            }
            else {
                this._nome;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            if ((salario == 0) || (!salario)) {
                throw new Error("O salario nao pode ser zero");
            }
            else {
                this._salario;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "valor_venda", {
        get: function () {
            return this._valor_venda;
        },
        set: function (valor_venda) {
            if ((valor_venda == 0) || (!valor_venda)) {
                throw new Error("O valor_venda nao pode ser zero");
            }
            else {
                this._valor_venda;
            }
        },
        enumerable: false,
        configurable: true
    });
    Vendedores.prototype.desconto = function () {
        return this._salario * 0.08;
    };
    return Vendedores;
}());
var Vendedor_pf = /** @class */ (function (_super) {
    __extends(Vendedor_pf, _super);
    function Vendedor_pf(nome, salario, valor_da_venda, regiao) {
        var _this = _super.call(this, nome, salario, valor_da_venda) || this;
        _this._regiao = regiao;
        return _this;
    }
    Object.defineProperty(Vendedor_pf.prototype, "regiao", {
        get: function () {
            return this._regiao;
        },
        set: function (regiao) {
            if (!Vendedor_pf.regiao.includes(regiao)) {
                throw new Error("Digite uma região válida");
            }
            this._regiao = regiao;
        },
        enumerable: false,
        configurable: true
    });
    Vendedor_pf.prototype.comissao = function () {
        if (this._regiao === "Sul") {
            return this._valor_venda * 0.1;
        }
        else if (this._regiao === "Sudeste") {
            return this._valor_venda * 0.12;
        }
        else if (this._regiao === "Centro-Oeste") {
            return this._valor_venda * 0.14;
        }
        else if (this._regiao === "Norte") {
            return this._valor_venda * 0.15;
        }
        else if (this._regiao === "Nordeste") {
            return this._valor_venda * 0.17;
        }
        return 0;
    };
    Vendedor_pf.prototype.salario_liquido = function () {
        return (this._salario + this.comissao());
    };
    Vendedor_pf.regiao = ["Sul", "Sudeste", "Centro-Oeste'", "Norte", "Nordeste"];
    return Vendedor_pf;
}(Vendedores));
var Vendedor_pj = /** @class */ (function (_super) {
    __extends(Vendedor_pj, _super);
    function Vendedor_pj(nome, salario, valor_venda, nome_empresa, quantidade_funcionario) {
        var _this = _super.call(this, nome, salario, valor_venda) || this;
        _this._nome_empresa = nome_empresa;
        _this._quantidade_funcionario = quantidade_funcionario;
        _this._valor_venda = valor_venda;
        return _this;
    }
    Object.defineProperty(Vendedor_pj.prototype, "nomeEmpresa", {
        get: function () {
            return this._nome_empresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedor_pj.prototype, "quantFuncionario", {
        get: function () {
            return this._quantidade_funcionario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedor_pj.prototype, "nome_empresa", {
        set: function (nome_empresa) {
            if ((nome_empresa == "") || (!nome_empresa)) {
                throw new Error("Nome da Empresa nao pode ser nulo");
            }
            this._nome_empresa = nome_empresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedor_pj.prototype, "quantidade_funcionario", {
        set: function (quantidade_funcionario) {
            if ((quantidade_funcionario == 0) || (!quantidade_funcionario)) {
                throw new Error("Quantidade de funcionarios deve maior que zero");
            }
            this._quantidade_funcionario = quantidade_funcionario;
        },
        enumerable: false,
        configurable: true
    });
    Vendedor_pj.prototype.valor = function () {
        if (this._valor_venda < 5000) {
            return this._valor_venda * 0.02;
        }
        else if (this._valor_venda >= 5000 && this._valor_venda < 10000) {
            return this._valor_venda * 0.04;
        }
        else if (this._valor_venda >= 10000) {
            return this._valor_venda * 0.06;
        }
        return 0;
    };
    Vendedor_pj.prototype.salario_total = function () {
        if (this.quantFuncionario < 100) {
            return this.salario + this.valor() + 200;
        }
        else if (this.valor_venda >= 100) {
            return this.salario + this.valor() + 300;
        }
        return 0;
    };
    return Vendedor_pj;
}(Vendedores));
// let vendedor1 = new Vendedores("Daniel",5000 , 100);
// console.log(vendedor1)
// let desconto = vendedor1.desconto()
// console.log(desconto)
var vendedor_PF = new Vendedor_pf("Daniel", 5000, 100, "Sul");
console.log(vendedor_PF);
var salario_liqui = vendedor_PF.salario_liquido();
console.log(salario_liqui);
// let vendedor_PJ = new Vendedor_pj("Daniel", 5000, 100, "Ttest", 10);
// console.log(vendedor_PJ)
// let salario = vendedor_PJ.salario_total()
// console.log(salario)
