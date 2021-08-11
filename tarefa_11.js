//Somatória de itens por departamento (você deverá retornar um objeto contendo o nome do departamento e o
//total de itens nele - Novamente considere os produtos “EM ESTOQUE” - e é apenas a somatória da quantidade
//de itens)

console.log("Item 11")

let deps = {}

for (const prod of listaProdutos) {
    if (deps[prod.departamento.nomeDepto] == undefined){
        deps[prod.departamento.nomeDepto] = prod.qtdEstoque
    } else {
        deps[prod.departamento.nomeDepto] += prod.qtdEstoque

    }

    
}
for (const departament in deps) {
   console.log(departament, deps[departament])
}
