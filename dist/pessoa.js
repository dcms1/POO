"use strict";
/* 1) Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e
setters. No setters valide se o nome for em branco retorne uma mensagem de nome
inválido. Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
inválida. Se a idade for 0 retorne uma mensagem de idade inválida. Crie um método
para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa */
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _sexo, _idade) {
        this._nome = _nome;
        this._sexo = _sexo;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome.length > 0) {
                this._nome = nome;
            }
            else {
                throw new Error('Nome precisa ser preenchido');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            if (sexo == 'M') {
                this._sexo = sexo;
            }
            else if (sexo == 'F') {
                this._sexo = sexo;
            }
            else {
                throw new Error("Por Favor entre apenas com 'F' ou 'M'");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade == 0) {
                throw new Error("Por favor coloque um numero maior que zerp");
            }
            else {
                this._idade = idade;
            }
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.teste_idade = function () {
        if (this._idade >= 18) {
            return console.log("Voce e maior de idade, cuidado para nao ser preso");
        }
        else {
            return console.log('Voce é menor de idade aproveite !!');
        }
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa('Daniel', "M", 22);
console.log(pessoa1);
pessoa1.idade = 25;
pessoa1.nome = 'Bia';
pessoa1.sexo = 'F';
console.log(pessoa1);
try {
    pessoa1.nome = "";
    console.log(pessoa1);
}
catch (error) {
    console.log(error);
}
pessoa1.teste_idade();
