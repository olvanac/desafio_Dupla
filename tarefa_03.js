//Quantidade total de itens disponíveis (similar ao anterior)

console.log("Item 03")

let somaDisponivel = 0

for (const prod of listaProdutos) {
    if (prod.disponivel === "sim"){
   somaDisponivel += prod.qtdEstoque 
}
}

console.log(somaDisponivel)
