class ConversaoDeUnidadesDeTempo{
    
    static minuto_segundo(minuto:number):number{
        return minuto*60
    }
    static hora_minuto(hora:number):number{
        return hora*60
    }
    static dia_hora(dia:number):number{
        return dia*24
    }
    static semana_dia(semana:number):number{
        return semana*24
    }
    static mes_semana(mes:number):number{
        return mes*30
    }
    static ano_dia(ano:number):number{
        return ano*365.25
    }
}

let cvs = ConversaoDeUnidadesDeTempo

console.log(`A conversao de 1 minuto é de ${cvs.minuto_segundo(1)} segundos`)
console.log(`A conversao de 1 hora é de ${cvs.hora_minuto(1)} minutos`)
console.log(`A conversao de 1 dia é de ${cvs.dia_hora(1)} horas`)
console.log(`A conversao de 1 semana é de ${cvs.semana_dia(1)} dias`)
console.log(`A conversao de 1 mes é de ${cvs.mes_semana(1)} semanas`)
console.log(`A conversao de 1 ano é de ${cvs.ano_dia(1)} dias`)