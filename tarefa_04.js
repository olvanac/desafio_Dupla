//Quantidade de itens disponíveis e em destaque

console.log("Item 04")

let somaDisponivelDestaque = 0

for (const prod of listaProdutos) {
    if (prod.disponivel === "sim" && prod.emDestaque === "sim") {
        somaDisponivelDestaque += prod.qtdEstoque
    }
}

console.log(somaDisponivelDestaque)


// && = e
// || ou
// ! não