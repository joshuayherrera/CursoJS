/*18) Programa una funciÃ³n que dada una cadena de texto cuente el nÃºmero de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

const ejercicio18 = (texto="") => {
    if (texto === "") return console.warn(`No has ingresado el texto`)
    
    if (typeof texto !== "string") return console.warn(`${texto} no es un tipo de dato string`)

    texto = texto.toLowerCase()

    let vocales = 0;
    let consonantes = 0;

    const buscarVocales = /^[aeiouáéíóú]$/i
    const bucarConsonantes = /^[a-z]$/i

    for(let i=0; i < texto.length; i++){
        let caracter = texto[i]
        if(buscarVocales.test(caracter)){
            vocales++
        }else if(bucarConsonantes.test(caracter)){
            consonantes++
        }
    }
    return console.info(`Vocales: ${vocales} Consonantes: ${consonantes}`)
}
ejercicio18("Hola mundo")




/*19) Programa una funciÃ³n que valide que un texto sea un nombre vÃ¡lido, pe. miFuncion("Jonathan MirCha") devolverÃ¡ verdadero.*/


const validarNombre = (nombre = "") => {
    if (nombre === "") return console.warn("No has ingresado el nombre")
    if (typeof nombre !== "string") return console.warn(`${nombre} no es un tipo string`)

    const validNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre)

    return (validNombre)
        ? console.info(`"${nombre}", es un nombre válido`)
        : console.info(`"${nombre}, NO es un nombre válido"`)
}

//validarNombre("Jonathan Mircha Alvarez")

/*20) Programa una funciÃ³n que valide que un texto sea un email vÃ¡lido, pe. miFuncion("jonmircha@gmail.com") devolverÃ¡ verdadero.*/

const validateEmail = (email = "") =>{
    if(email === "") return console.warn(`No ingresaste el gmail`)
	if(typeof email !== "string") return console.error(`${email} no es un tipo string`)  

    // Define our regular expression.
	const validEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[c,o,m]{2,4}$/;
	// Using test we can check if the text match the pattern
	if(validEmail.test(email)){
		console.log('Email is valid, continue with form submission');
		return true;
	}else{
		console.log('Email is invalid, skip form submission');
		return false;
	}
} 

//console.log(validateEmail("jonmircha@gmail.com"))