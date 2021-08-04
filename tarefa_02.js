//Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")

console.log("Item 02:")

let somaDestaque = 0

for (const prod of listaProdutos) {
    if (prod.emDestaque === "sim"){
   somaDestaque += prod.qtdEstoque 
}
}

console.log(somaDestaque)