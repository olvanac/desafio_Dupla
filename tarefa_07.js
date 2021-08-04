//Produto mais barato da loja (bem como seu departamento - considere apenas o preço dele)

console.log("Item 07")

let barato = 999999999999.9
let itemBarato = 0
let codBarato = 0
let departamentoBarato = 0

for (const prod of listaProdutos) {
    if (prod.preco < barato) {
        barato = prod.preco
        itemBarato = prod.descricao
        codBarato = prod.codProduto
        departamentoBarato = prod.departamento.nomeDepto
    }
    
}

console.log(codBarato, itemBarato, barato, departamentoBarato)