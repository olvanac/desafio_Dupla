//Ticket médio por departamento (similar ao item anterior, porém retornando uma lista de objetos que
//contenha o nome do departamento e o seu ticket médio). Este é um exercícios difícil, porém é 

console.log("Item 13")

let ticketDep = {}
let prods = {}


for (const prod of listaProdutos) {

    if (prods[prod.departamento.nomeDepto] == undefined) {
        prods[prod.departamento.nomeDepto] = 1
    } else {
        prods[prod.departamento.nomeDepto] + 1

    }
}
for (const departament in prods) { 
    console.log(departament, invents[departament] / prods[departament])
}