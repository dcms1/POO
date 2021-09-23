"use strict";
var ConversaoDeUnidadesDeTempo = /** @class */ (function () {
    function ConversaoDeUnidadesDeTempo() {
    }
    ConversaoDeUnidadesDeTempo.minuto_segundo = function (minuto) {
        return minuto * 60;
    };
    ConversaoDeUnidadesDeTempo.hora_minuto = function (hora) {
        return hora * 60;
    };
    ConversaoDeUnidadesDeTempo.dia_hora = function (dia) {
        return dia * 24;
    };
    ConversaoDeUnidadesDeTempo.semana_dia = function (semana) {
        return semana * 24;
    };
    ConversaoDeUnidadesDeTempo.mes_semana = function (mes) {
        return mes * 30;
    };
    ConversaoDeUnidadesDeTempo.ano_dia = function (ano) {
        return ano * 365.25;
    };
    return ConversaoDeUnidadesDeTempo;
}());
var cvs = ConversaoDeUnidadesDeTempo;
console.log("A conversao de 1 minuto \u00E9 de " + cvs.minuto_segundo(1) + " segundos");
console.log("A conversao de 1 hora \u00E9 de " + cvs.hora_minuto(1) + " minutos");
console.log("A conversao de 1 dia \u00E9 de " + cvs.dia_hora(1) + " horas");
console.log("A conversao de 1 semana \u00E9 de " + cvs.semana_dia(1) + " dias");
console.log("A conversao de 1 mes \u00E9 de " + cvs.mes_semana(1) + " semans");
console.log("A conversao de 1 ano \u00E9 de " + cvs.ano_dia(1) + " dias");
