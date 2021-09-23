class Produtos{
    constructor(
        private _quantidade: number,
        private _valor: number,
        private _produto: string

    ){}

    get quantidade(){
        return this._quantidade
    }
    get valor(){
        return this._valor
    }
    get produto(){
        return this._produto
    }

    public set quantidade(quantidade:number){
        if ((quantidade == 0)||(!quantidade)){
            throw new Error("A quantidade pode ser vazia");
            
        }else{
            this._quantidade = quantidade
        }
    }

    public set produto(produto:string){
        if ((produto == '')||(!produto)){
            throw new Error("O produto pode ser vazio");
            
        }else{
            this._produto = produto
        }
    }


    public set valor(valor:number){
        if ((valor == 0)||(!valor)){
            throw new Error("O valor pode ser vazio");
            
        }else{
            this._valor = valor
        }
    }

    public desconto():number{
        if (this.quantidade <= 10){
            return (this.valor - (this.quantidade*this._valor*0))
        }
        else if (this.quantidade<=20){
            return (this.valor - (this.quantidade*this._valor*0,10))
        }
        else if (this.quantidade<=50){
            return (this.valor - (this.quantidade*this._valor*0,20))
        } 
        else if (this.quantidade>50){
            return (this.valor - (this.quantidade*this._valor*0,25))
        }
        return 0 
    }
}

let produto1 = new Produtos(10,50,'Mouse')
let desconto = produto1.desconto()

console.log(`O produto ${produto1.produto} de preço ${produto1.valor} quantidade comprada
de ${produto1.quantidade} teve o desconto de ${produto1.desconto()} e o valor pago foi de ${(produto1.valor*produto1.quantidade-produto1.desconto())}`)