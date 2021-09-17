/*Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
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

class Vendedores{
    protected _nome :string;
    protected _salario: number;
    protected _valor_venda: number;
    
    constructor(nome :string,salario: number,valor_venda: number){
        this._nome = nome;
        this._salario = salario;
        this._valor_venda = valor_venda;
    }

    get nome(){
        return this._nome
    }
    get salario(){
        return this._salario
    }
    get valor_venda(){
        return this._valor_venda
    }
    
    set nome(nome:string){
        if ((nome == '')||(!nome)) {
            throw new Error("O Nome nao pode ser nulo")
        }else{
            this._nome
        }
    }

    set salario(salario:number){
        if ((salario==0)||(!salario)) {
            throw new Error("O salario nao pode ser zero")
        }else{
            this._salario
        }
    }

    set valor_venda(valor_venda:number){
        if ((valor_venda==0)||(!valor_venda)) {
            throw new Error("O valor_venda nao pode ser zero")
        }else{
            this._valor_venda
        }
    }

    public desconto(){
        return this._salario * 0.08;
    }
}

class Vendedor_pf extends Vendedores {
    static regiao = ["Sul", "Sudeste", "Centro-Oeste'", "Norte", "Nordeste"];

    private _regiao: string;
  
    constructor(
      nome: string,
      salario: number,
      valor_da_venda: number,
      regiao: string
    ) {
      super(nome, salario, valor_da_venda);
      this._regiao = regiao;
    }
    get regiao(): string {
      return this._regiao;
    }
    set regiao(regiao: string) {
      if (!Vendedor_pf.regiao.includes(regiao)) {
        throw new Error("Digite uma região válida");
      }
      this._regiao = regiao;
    }
    public comissao(){
      if (this._regiao === "Sul") {
        return this._valor_venda * 0.1;
      } else if (this._regiao === "Sudeste") {
        return this._valor_venda * 0.12;
      } else if (this._regiao === "Centro-Oeste") {
        return this._valor_venda * 0.14;
      } else if (this._regiao === "Norte") {
        return this._valor_venda * 0.15;
      } else if (this._regiao === "Nordeste") {
        return this._valor_venda * 0.17;
      }
      return 0;
    }
    public salario_liquido() {
      return this.salario + this.comissao();
    }
}

class Vendedor_pj extends Vendedores {
    private _nome_empresa: string;
    private _quantidade_funcionario: number;
    
    constructor(
      nome: string,
      salario: number,
      valor_venda: number,
      nome_empresa: string,
      quantidade_funcionario: number
    ) {
      super(nome, salario, valor_venda);
      this._nome_empresa = nome_empresa;
      this._quantidade_funcionario = quantidade_funcionario;
      this._valor_venda = valor_venda
    }
    get nomeEmpresa(): string {
      return this._nome_empresa;
    }
    get quantFuncionario(): number {
      return this._quantidade_funcionario;
    }
  
    set nome_empresa(nome_empresa: string) {
      if ((nome_empresa=="")||(!nome_empresa)) {
        throw new Error("Nome da Empresa nao pode ser nulo");
      }
      this._nome_empresa = nome_empresa;
    }
  
    set quantidade_funcionario(quantidade_funcionario: number) {
      if ((quantidade_funcionario== 0)||(!quantidade_funcionario)) {
        throw new Error("Quantidade de funcionarios deve maior que zero");
      }
      this._quantidade_funcionario = quantidade_funcionario;
    }
    public valor() {
      if (this._valor_venda < 5000) {
        return this._valor_venda * 0.02;
      } else if (this._valor_venda >= 5000 && this._valor_venda < 10000) {
        return this._valor_venda * 0.04;
      } else if (this._valor_venda >= 10000) {
        return this._valor_venda * 0.06;
      }
      return 0;
    }
    public salario_total() {
      if (this.quantFuncionario < 100) {
        return this.salario + this.valor() + 200;
      } else if (this.valor_venda >= 100) {
        return this.salario + this.valor() + 300;
      }
      return 0;
    }
  }
let vendedor1 = new Vendedores("Daniel",5000 , 100);
console.log(vendedor1)
let desconto = vendedor1.desconto()
console.log(desconto)

let vendedor_PF = new Vendedor_pf("Daniel", 5000, 100, "Sul");
console.log(vendedor_PF)
let salario_liqui = vendedor_PF.salario_liquido
console.log(salario_liqui)

let vendedor_PJ = new Vendedor_pj("Daniel", 5000, 100, "Ttest", 10);
console.log(vendedor_PJ)
let salario = vendedor_PJ.salario_total()
console.log(salario)

