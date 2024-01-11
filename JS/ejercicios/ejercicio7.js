/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

const ejercicio21 = (array = []) => {
    if (array.length === 0) return console.warn("NO has ingresado el array completo")
    if (!(array instanceof Array)) return console.warn(`${array} no es un arreglo`)
    if (!array.every(element => typeof element === "number")) return console.error("Necesitas ingresar numero")


    /*let nuevoArreglo = []
    for (let i = 0; i < array.length ; i++){
        nuevoArreglo.push(Math.pow(array[i],2))
    }
    return console.info(nuevoArreglo)*/

    //MEJOR SOLUCION
    const newArray = array.map(el => el * el)
    return console.info(newArray)
}

//ejercicio21([1,4,5])
///ejercicio21({})


/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/


const ejercicio22 = (array = []) => {
    if (array.length === 0) return console.warn("NO has ingresado nada en el arreglo")
    if (!(array instanceof Array)) return console.warn(`${array} NO es un array`)
    if (!array.every(element => typeof element === "number")) return console.error(`Los elementos del arreglo agregado NO son numeros`)

    console.info([Math.max(...array),Math.min(...array)])

}
//ejercicio22([-100,1,2,3,4,5,6,7,-200])






/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const ejercicio23 = (numeros = []) => {
    if (numeros.length === 0) return console.warn(`El arreglo esta vacio`) 
    if (!(numeros instanceof Array)) return console.warn(`${numeros} NO es un arreglo`)
    if (!numeros.every(element => typeof element === "number")) return console.error(`Los elementos de ${numeros} NO son numeros`)

    return console.info({
        pares: numeros.filter(num => num % 2 === 0),
        impares: numeros.filter(num => num % 2 === 1)
    })

    /*MI SOLUCION LENTA
    
    let pares = [],
    impares = []

    for (let i = 1; i < numeros.length ; i++) {
        if(i % 2 === 0){
            pares.push(i)
        }else{
            impares.push(i)
        }
    }

    const conjunto = {
        pares,
        impares
    }
    console.log(conjunto)*/
}

//ejercicio23([1,2,3,4,5,6,7,8,9])