//Valor total do inventário por departamento (similar ao item anterior - considere TODOS os produtos)

console.log("Item 12")

let invents = {}


for (const prod of listaProdutos) {
    if (invents[prod.departamento.nomeDepto] == undefined){
    invents[prod.departamento.nomeDepto] = prod.qtdEstoque * prod.preco
    } else {
        invents[prod.departamento.nomeDepto] += prod.qtdEstoque * prod.preco

    }

    
}
for (const departament in invents) {
   console.log(departament, invents[departament])
}
