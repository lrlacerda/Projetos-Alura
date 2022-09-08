var nomeDoAluno = ""

var notaPrimeiroBimestre = 9
var notaSegundoBimestre = 7
var notaTerceiroBimestre = 4
var notaQuartoBimestre = 2

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

if (notaFinal >= 7) {
    console.log("Aprovado")
} else {
   console.log("Reprovado") 
}

//var notaFixada = notafinal.tofixed(1) 
//fixa as casas decimais que vc quer

console.log(notaFinal)