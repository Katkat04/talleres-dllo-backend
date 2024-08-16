//Ejercicios parcial Katy Diaz

let lista = ["hola", "Electroencefalografista", "La propia Academia la ha declarado la palabra más larga", "Perteneciente o relativo a la electroencefalografía", "hola", "bye", "bye", "hola"]
let listanum =[1,5,2,8,32,7,3,89,9,0,6]
let lordenada =[0,1,2,3,4,5,6,7,8,9,10]
//Punto 1
function one(lista){
    let contador=0
    let tamano =0
    for (let index = 0; index < lista.length; index++) {
        tamano = lista[index].length
        if(tamano > 25){
            contador++
        }
    }
    return console.log(contador)
}
one(lista)

//Punto 2
function two(base, exponente) {
    let op= 1
    for (let index = 0; index < exponente; index++) {
        op = base*op
    }
    return op
}
console.log(two(2,5))

//Punto 3
function ocurrencia(elemento, lista){
    let contador=0
    for (let index = 0; index < lista.length; index++) {
        if (elemento === lista[index]) {
            contador++
        }
        
    }
    return contador
}
console.log(ocurrencia("hola", lista))

//Punto 4
function fibonnacci(n){
    let lfibo= [0,1]
    for (let index = 2; index < n+3; index++) {
        lfibo[index] = (lfibo[index-1]) + (lfibo[index-2])   
    }
    return lfibo[n]
}
console.log(fibonnacci(4))

//Punto 5
function duplicado(lista){
    for (let index = 0; index < lista.length; index++) {
        let elemento = lista[index]
        for (let index2 = index+1; index2 < lista.length; index2++) {
            if (elemento === lista[index2]) {
                return console.log("si hay duolicado")
            }
        }  
    }
}
console.log(duplicado(lista))

//Punto 6
function repetido(lista){

    let maxElement = null
    let maxCount = 0
    let contador = 0
    let elemento = 0
    for (let index = 0; index < lista.length; index++) {
        elemento = lista[index]

        for (let index2 = index+1; index2 < lista.length; index2++) {
            if (elemento === lista[index2]) {
                contador++
            }
        }  
    }
    if (contador > maxCount) {
        maxCount = contador;
        maxElement = elemento;
    }
    return maxElement
}
console.log(repetido(lista))

//Punto 7
function ordenar(lista) {
    for (let index = 0; index < lista.length; index++) {
        let min = index

        for (let index2= index + 1; index2 < lista.length; index2++) {
            if (lista[min]>lista[index2]) {
                min = index2
            } 
        }
        if (min !==index) {
            [lista[index], lista[min]] = [lista[min],lista[index]]
        }  
    }
    return lista
}
console.log(ordenar(listanum))

//Punto 8 
function nelemento(lista, n) {
    listaordenada = ordenar(lista)
    return listaordenada[lista.length-n]
}
console.log(nelemento(listanum, 3))

//Punto 9 
function producto(lista) {
    listaordenada = ordenar(lista)
    p = listaordenada[lista.length-1] * listaordenada[lista.length-2]
    return p
}
console.log(producto(listanum))

//Punto 10
function bbinaria(lista, elemento) {
    let inicio = 0
    let fin = lista.length - 1

    while (inicio <= fin) {
        let mitad = Math.floor((inicio+fin)/2)

        if (lista[mitad] === elemento) {
            return mitad
        }
        if (lista[mitad] < elemento) {
            inicio = mitad + 1
        }else{
            fin = mitad - 1
        }
    }
}
console.log("El elemento es " + bbinaria(lordenada, 4))

