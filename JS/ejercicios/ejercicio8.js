/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const ejercicio24 = (numeros = undefined) => {
    if(numeros === undefined) return console.warn("NO has ingresado ningun arreglo con numeros")
    if(!(numeros instanceof Array)) return console.warn(`${numeros} NO es un arreglo`)
    if(!numeros.every(element => typeof element === "number")) return console.error(`NO has ingresado un arrays de numeros`)

    return console.info({
        asc: [...numeros].sort((a,b) => {return a - b}),
        desc: [...numeros].sort((a,b) => {return b - a})  
    })
}

//ejercicio24([2,3,5,6,7,5,3,1,33])


/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

const ejercicio25 = (arreglo = undefined) => {
    if(arreglo === undefined) return console.warn("NO has ingresado ningun arreglo")
    if(!(arreglo instanceof Array)) return console.warn(`${arreglo} NO es un arreglo`)
    if(arreglo.every(element => typeof element === undefined)) return console.error(`NO has ingresado un array completo`)

    const newArray = []
    for (const i of arreglo) {
        if (!newArray.includes(i)) {
            newArray.push(i)
        }
    }
    console.info(newArray)
}


//ejercicio25(["x", 10, "x",2, "10", 10, true, true])

/*26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const ejercicio26 = (numeros = undefined) => {
    if(numeros === undefined) return console.warn("NO has ingresado ningun arreglo con numeros")
    if(!(numeros instanceof Array)) return console.warn(`${numeros} NO es un arreglo`)
    if(!numeros.every(element => typeof element === "number")) return console.error(`NO has ingresado un arrays de numeros`)

    let sumaTotal = 0;
    for (let i = 0; i < numeros.length;i++) {
        sumaTotal += numeros[i]
    }
    
    let promedio = sumaTotal/numeros.length
    return console.info(promedio)
}

ejercicio26([9,8,7,6,5,4,3,2,1,0])