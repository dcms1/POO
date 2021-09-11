/*2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
quantidade de dias. Crie os getters e setters. No setters crie validações para não
aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
zero. Crie um método passeio para receber a quantidade de dias e o valor da
locação. O sistema calcule o total que será a multiplicação da quantidade de dias
pelo valor da locação.*/

class Veiculos {
    constructor(
        private _modelo:string,
        private _marca:string,
        private _ano:number,
        private _valor_locacao:number,
        private _qts_dias:number
    ) {}

    get modelo(){
        return this._modelo
    }
    get marca(){
        return this._marca
    }
    get ano(){
        return this._ano
    }
    get valor_locacao(){
        return this._valor_locacao
    }
    get qts_dias(){
        return this._qts_dias
    }

    set modelo(modelo:string){
        if (modelo == ''){
            throw new Error("O valo nao pode ser vazio");
            
        }else{
            this._modelo = modelo
        }
    }
    set marca(marca:string){
        if (marca == ''){
            throw new Error("O valo nao pode ser vazio");
            
        }else{
            this._marca = marca
        }
    }
    set modanoelo(ano:number){
        if (ano == 0){
            throw new Error("O valo nao pode ser zero");
            
        }else{
            this._ano = ano
        }
    }
    set valor_locacao(valor_locacao:number){
        if (valor_locacao == 0){
            throw new Error("O valo nao pode ser zero");
            
        }else{
            this._valor_locacao = valor_locacao
        }
    }
    set qts_dias(qts_dias:number){
        if (qts_dias == 0){
            throw new Error("O valo nao pode ser zero");
            
        }else{
            this._qts_dias = qts_dias
        }
    }

    public valor_total(){
        let valor_total = this.qts_dias * this.valor_locacao
        return  valor_total
   }
}

let veiculo1 = new Veiculos('corsa','chevrolet',2006,100,3)
console.log(veiculo1)
console.log('O valor total a ser pago é',veiculo1.valor_total())