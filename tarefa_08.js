//Produto de estoque mais valioso (considere o preço multiplicado pela quantidade e também
//apenas EM ESTOQUE)

console.log("Item 08")

let maisValioso = 0
let qtMaisValioso = 0
let precoMaisValioso = 0
let codMaisValioso = 0
let itemMaisValioso = 0



for (const prod of listaProdutos) {
    qtMaisValioso = prod.qtdEstoque
    precoMaisValioso = prod.preco

    if ((qtMaisValioso * precoMaisValioso) > maisValioso) {
        
        maisValioso = qtMaisValioso * precoMaisValioso
        codMaisValioso = prod.codProduto
        itemMaisValioso = prod.descricao

    }


}

console.log("Código: " + codMaisValioso + ", Item: " + itemMaisValioso + ", Valor total: " + maisValioso)


//preco*quantidade
//comparar 