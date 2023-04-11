// Actividad_1
function determinarParidad(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par.");
    } else {
      console.log(numero + " es un número impar.");
    }
  }
  determinarParidad(3)
  console.log("-------------------------------------------------------------------------------")

//   Actividad_2
function determinarMayor(numeroUno,numeroDos){ 
if (numeroUno<numeroDos) {
    console.log ("El número " + numeroDos + " es más grande que el " + numeroUno)
} else if (numeroUno>numeroDos){
    console.log ("El número " + numeroUno + " es más grande que el " + numeroDos)
}else{
    console.log (" Los numero son iguales ")
    
}}
determinarMayor(1,2)
console.log("-------------------------------------------------------------------------------")
//   Actividad_3
function determinarMultiplo(numeroMultiplo){
if (numeroMultiplo % 5 === 0) {
    console.log( "El numero es multiplo de 5" )
} else { 
    console.log( "El numero No es multiplo de 5")
    
}}
determinarMultiplo(20)
console.log("-------------------------------------------------------------------------------")

//   Actividad_4

function secuenciaNumerica(numeroPico){
for (let numeroInicio = 0 ; numeroInicio <= numeroPico ; numeroInicio++) {
    console.log(numeroInicio)   
}}
secuenciaNumerica(10)
console.log("-------------------------------------------------------------------------------")

//   Actividad_5

function clonacioPalabra(numeroDeClones, palabraClonada,){
for (let index = 0; index < numeroDeClones; index++) {
    console.log(palabraClonada) 
}}

clonacioPalabra(10 , "carpincho")
console.log("-------------------------------------------------------------------------------")

//   Actividad_6

let arrays=[1,2,3,4,5,6,7,8,9,"rojo"]
function parametrosArray(valores){
for (let index = 0; index < valores.length; index++) {
   console.log(valores[index]) 
}}
parametrosArray(arrays)
console.log("-------------------------------------------------------------------------------")

//   Actividad_7

let secuenciaArray=[1,2,3,4,5,6,7,8,9,10]
function antiQuinto(valoresArray) {
    for (let index = 0; index < valoresArray.length; index++) {
        if (index !== 4 ) {
            console.log(valoresArray[index])  
        }
        
    }
}
antiQuinto(secuenciaArray)
console.log("-------------------------------------------------------------------------------")

//   Actividad_8
let array=[2,3,4,5,6,7,8]
function multiplicarArray(arrayRecibido, numeroMultiplicado) {
    for (let index = 0; index < arrayRecibido.length; index++) {
       let resultado=arrayRecibido[ index ] *numeroMultiplicado;
        console.log(resultado)
    }
}multiplicarArray(array, 2)