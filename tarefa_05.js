//Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em
//estoque - considere apenas os produtos “EM ESTOQUE”)

console.log("Item 05")

let somaTotal = 0

for (const prod of listaProdutos) {
    if (prod.qtdEstoque > 0) {
        somaTotal = somaTotal + (prod.preco * prod.qtdEstoque)
    }  
}

console.log(somaTotal)




