/*3) Crie uma classe Fatura com os atributos números, descrição, quantidade
Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
comprada pelo preço.*/
class Fatura {
    constructor(
        public numero:number,
        public descricao:string,
        public quantidade:number,
        public preco:number
    ) {}

    public valor_total(){
        let valor_total=this.quantidade * this.preco
        return valor_total
    }
}

const fatura1 = new Fatura(123456,'conta de luz',2,500);
console.log(fatura1)
console.log('O valor total da fatura é ',fatura1.valor_total())