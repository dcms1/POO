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
class Imposto_Renda{
   
    constructor(nome:string,renda:number){
        this.nome = nome;
        this.renda =renda}

    get nome(){
        return this.nome
    }
    get renda(){
        return this.renda
    }
    set nome(nome:string){
        if (nome == ''){
            throw new Error('Nome esta Vazio')
        }else{
            this.nome=nome
        }
    }
    set renda(renda:number){
        if (renda == 0){
            throw new Error('Renda nao pode ser nula')
        }else{
            this.renda = renda
        }
    }
}

class Pessoa_Fisica extends Imposto_Renda{
    constructor(
        private _gastos_saude:number)
        {
        super(nome,renda)
    }

    get gastos_saude(){
        return this._gastos_saude
    }
    set gastos_saude(gastos_saude:number){
        if (gastos_saude>0){
            this._gastos_saude=gastos_saude
        }else{
            throw new Error('O gasto nao deve ser nulo')
        }
    }
    public imposto_fisica(renda:number){
        if(renda<20000){
            if(this.gastos_saude>0){
                let imposto = (renda*0.15)-(this._gastos_saude*0.5)
            }else{
                let imposto = (renda*0.15)
            }
        }else{
            if(this.gastos_saude>0){
                let imposto = (renda*0.25)-(this._gastos_saude*0.5)
            }else{
                let imposto = (renda*0.25)
            }
        }
    }
}
class Pessoa_juridica extends Imposto_Renda{
    constructor(
        private _numero_funci:number
    ){super(nome,renda)}

    
    get numero_funci(){
        return this._numero_funci 
    }

    set numero_funci(numero_funci:number){
        if (numero_funci > 0) {
           this._numero_funci= numero_funci 
        }else{
            throw new Error('O numero de funcionarios deve ser maior que zero')
        }
    }
    public imposto_juridico(renda:number,_numero_funci:number){
        if(_numero_funci>= 10){
            let imposto = renda*0.14
        }else{
            let imposto = renda*0.16
        }
    }
}


