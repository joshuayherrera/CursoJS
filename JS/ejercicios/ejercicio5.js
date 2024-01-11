/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/

const ejercicio15 = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn('No ingreso el numero')

    if (base === undefined) return console.warn(`No ingreso la base`)

    if (typeof numero ==! "number") return console.warn(`${numero} NO es un numero`)

    if (typeof base ==! "number") return console.warn(`${base} NO es un numero`)

    if (Math.sign(numero) === -1) return console.error(`El numero no puede ser negativo`)

    if (Math.sign(base) === -1) return console.error(`La base no puede estar en negativo`)

    if (base === 2) {
        return console.log(`${parseInt(numero, base)} base 2`)
    }else if (base === 10) {    
        return console.log(`${numero.toString(base)} base 10`)
    }else {
        console.warn(`La base no es valida`)
    }
}
//ejercicio15(100,2)

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/
const ejercicio16 = (monto = 0, descuento = undefined) => {
    if(monto === 0) return console.warn(`No has ingresado el monto`)

    if(descuento === undefined) return console.warn(`No has ingresado el descuento`)

    if(typeof monto ==! "number") return console.error(`${monto} no es un numero`)

    if(typeof descuento ==! "number") return console.error(`${descuento} no es un numero`)

    if(Math.sign(monto) === -1) return console.warn(`El monto no puede ser negativo`)

    if(Math.sign(descuento) === -1) return console.error(`El descuento solo numeros positivos`)

    descuento = (descuento/100) * monto

    return console.log(monto - descuento)
}

//ejercicio16(1000,20)



/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const ejercicio17 = (fecha = undefined) => {
    if(fecha === undefined) return console.warn(`No ingresaste la fecha`)

    if(!(fecha instanceof Date)) return console.error(`${fecha} no es una instancia de Date`)

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS= 1000 * 60 * 60 * 24 * 365,
    aniosHumanos= Math.round(hoyMenosFecha / aniosEnMS)


    if(Math.sign(aniosHumanos) === -1){
        console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    }else if (Math.floor(Math.sign(aniosHumanos)) === 1) {
        console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
    }else{
        console.info(`Estamos en el año: ${fecha.getFullYear()}`)
    }
}

//ejercicio17(new Date())
