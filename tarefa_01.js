//Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)

console.log("Item 01")

let somaEstoque = 0

for (const prod of listaProdutos) {
   somaEstoque += prod.qtdEstoque
}

console.log(somaEstoque)


