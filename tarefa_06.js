//Produto mais caro da loja (bem como seu departamento - considere apenas o preço dele)

console.log("Item 06")

let caro = 0
let itemCaro = 0
let codCaro = 0
let departamentoCaro = 0

for (const prod of listaProdutos) {
    if (prod.preco > caro) {
        caro = prod.preco
        itemCaro = prod.descricao
        codCaro = prod.codProduto
        departamentoCaro = prod.departamento.nomeDepto
    }
    
}

console.log(codCaro, itemCaro, caro, departamentoCaro)