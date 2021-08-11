//Departamento menos valioso (similar ao anterior)

console.log("Item 15")


let depDisvalis = ""

for (const departament in invents) {
    if (!invents[depDisvalis] || invents[depDisvalis] > invents[departament]) {
        depDisvalis = departament
    }
 }

 console.log(depDisvalis)