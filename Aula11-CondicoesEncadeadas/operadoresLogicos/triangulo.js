let ladoA = 10
let ladoB = 10
let ladoC = 100

let ladoAB = ladoA + ladoB 
let ladoAC = ladoA + ladoC
let ladoBC = ladoB + ladoC

if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){
    console.log("LADOS VÁLIDOS PARA FORMAR UM TRIÂNGULO");
} else {
    console.log("NÃO FOI POSSÍVEL FORMAR UM TRIÂNGULO");
}