/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
const ejercicio12 = (numero = undefined) => {
    if(numero === undefined) return console.warn("NO has ingresado un numero para definir si es primo o no")

    if(typeof numero !== "number") return console.info(`El dato "${numero}" NO es un numero`)

    if(Math.sign(numero) === -1) return console.error(`El numero no puede ser negativo!`)

    if(numero === 0) return console.error(`El numero no puede ser ${numero}`)

    if (numero <= 1) return console.log(false)

    for(let i=2; i < numero; i++){
        if (numero % i === 0) {
            console.log(false); 
            break;
        }
    }

    return console.log(true)
}
//ejercicio12()



/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/

const ejercicio13 = (numero = undefined) => {
    if(numero === undefined) return console.warn("NO has ingresado un numero para definir si es primo o no")

    if(typeof numero !== "number") return console.info(`El dato "${numero}" NO es un numero`)

    if(numero === 0) return console.log("El 0 es un numero neutro")

    if(numero % 2 === 0) return console.log("Par")
    
    return console.log("Impar")
}

ejercicio13(20)


/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

const ejercicio14 = (numero = undefined , conversion = "") => {
    if (numero === undefined) return console.warn("NO has ingresado el numero")

    if(typeof numero ==! "number") return console.warn(`El valor "${numero}" NO es un numero`)

    conversion = conversion.toUpperCase()
    console.log(conversion)
    if (conversion !== `C` && conversion !== `F`) return console.error(`No ingresaste el valor "F" o "C"`)

    if(conversion === "C"){
        return console.log(`${(numero * 9/5) + 32}°F`)
    }else{
        return console.log(`${((numero - 32) * 5/9).toFixed(4)}°C`)
    }
}

ejercicio14(2,"f")