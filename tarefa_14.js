//Departamento mais valioso (qual o departamento que tem a maior somatória dos valores dos itens -
//Considere todos os departamentos)

console.log("Item 14")

let depValis = ""

for (const departament in invents) {
    if (!invents[depValis] || invents[depValis] < invents[departament]) {
        depValis = departament
    }
 }

 console.log(depValis)