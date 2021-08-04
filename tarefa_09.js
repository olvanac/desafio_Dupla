//Produto em estoque menos valioso (considere o preço multiplicado pela quantidade e
//também apenas EM ESTOQUE)

console.log("Item 09")

let menosValioso = 99999999999
let qtMenosValioso = 0
let precoMenosValioso = 0
let codMenosValioso = 0
let itemMenosValioso = 0



for (const prod of listaProdutos) {
    qtMenosValioso = prod.qtdEstoque
    precoMenosValioso = prod.preco

    if (prod.qtdEstoque > 0) {
        
        if ((qtMenosValioso * precoMenosValioso) < menosValioso) {

            menosValioso = qtMenosValioso * precoMenosValioso
            codMenosValioso = prod.codProduto
            itemMenosValioso = prod.descricao
        }
    }


}

console.log("Código: " + codMenosValioso + ", Item: " + itemMenosValioso + ", Valor total: " + menosValioso)


//preco*quantidade
//comparar 