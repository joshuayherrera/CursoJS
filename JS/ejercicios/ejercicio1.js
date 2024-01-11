const ejercicio1 = (text="") => 
(!text) 
? console.warn("No ingresaste un texto")
: console.log(text.length)
/*//Logrado el primero
ejercicio1("Hola mundoo");
ejercicio1("2324{}3213");
*/

const ejercicio2 = (mensaje="", recorte=undefined) =>
(!mensaje) 
? console.warn("No ingresaste un texto")
: (recorte === undefined) 
    ? console.warn("Defina el recorte")
    : console.log(mensaje.slice(0,recorte))
/*//Logrado el segundo
ejercicio2("hola mundo",3);
ejercicio2("joshua es un crack", 6);
*/

const ejercicio3 = (mensaje="", separacion=undefined) =>
(!mensaje) 
?console.warn("No ingresaste un texto")
:(separacion === undefined) 
    ?console.warn("No ingresaste la separacion")
    :console.log(mensaje.split(separacion))
/*//Logrado el tercero
ejercicio3("hola que tal", " ");
ejercicio3("joshua, alvarez, herrera", ", ")
*/
const ejercicio4 = (mensaje="", cantidad=undefined) => {
    if (!mensaje) return console.warn("No ingresaste el texto")

    if (cantidad === undefined) return console.warn(`No ingresaste la cantidad de veces a repetir el texto`)

    if (cantidad === 0) return console.error(`La cantidad de veces no puede ser 0`)

    if(Math.sign(cantidad) === -1) return console.error(`La cantidad no puede ser negativo`)

    console.log(`${mensaje} `.repeat(cantidad))
}
/*//Logrado el cuarto
ejercicio4("Hola Mundo", 0);
ejercicio4("Joshua Crack", 2);
*/









