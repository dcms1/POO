class Funcionarios{
    constructor(
    private _nome:string,
    private _salario_hora:number,
    private _dias_trabalhados:number,
    private _total_faltas:number
    ){}

    get nome(){
        return this._nome
    }
    get salario_hora(){
        return this._salario_hora
    }
    get dias_trabalhados(){
        return this._dias_trabalhados
    }
    get total_faltas(){
        return this._total_faltas
    }

    
    public set nome(nome : string) {
        this._nome = nome;
    }
    public set salario_hora(salario_hora : number) {
        this._salario_hora = salario_hora;
    }
    public set dias_trabalhados(dias_trabalhados : number) {
        this._dias_trabalhados = dias_trabalhados;
    }
    public set total_faltas(total_faltas : number) {
        this._total_faltas = total_faltas;
    }

    public salario_bruto():number{
        return this.salario_hora * this.dias_trabalhados
    }

    public PLR(){
        if (this.total_faltas == 0){
            return this.salario_bruto()
        }
        else if (this.total_faltas == 1){
        return this.salario_bruto()*0.94
        }
        else if (this.total_faltas == 2){
            return this.salario_bruto()*0.92
        }
        else if (this.total_faltas == 3){
            return this.salario_bruto()*0.90
        }
        else if (this.total_faltas == 1){
        return this.salario_bruto()*0.88
        }
        else if (this.total_faltas >= 5){
            return 0
        }
        return 0
    }

    public desconto(){
        return this.salario_bruto()*0.05
    }

    public salario_liquido(){
        return (this.salario_bruto() - this.desconto() + this.PLR())
    }
}

let funcionario1 = new Funcionarios('Daniel',50,21,0)

console.log(`O funcionário de nome ${funcionario1.nome} tem o salário bruto de ${funcionario1.salario_bruto()}, teve ${funcionario1.total_faltas} falta(s) e sua PLR foi de ${funcionario1.PLR()}`)
console.log(`O funcionário de nome ${funcionario1.nome} tem o salário bruto de ${funcionario1.salario_bruto()}, o desconto de ${funcionario1.desconto()}, a PLR de ${funcionario1.PLR()} e o salário líquido de ${funcionario1.salario_liquido()}`)
