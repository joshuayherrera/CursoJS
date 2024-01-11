/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const ejercicio5 = (texto = "") => 
(!texto) 
? console.warn("No ingresaste un mensaje de texto")
: console.log(texto.split("").reverse().join(""))
//ejercicio5("Hola mundo")
//ejercicio5("Te quiero")

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const ejercicio6 = (texto = "", buscador = "") => {
if (!texto) return console.warn("No ingresaste un mensaje de texto")
if (!buscador) return console.error("No ingresaste la palabra a buscar")

let resultados = 0;
const palabras = texto.split(" ");

for (const palabra of palabras) {
    if (palabra === buscador){
        resultados++;
    }
}
console.log(resultados)
}
//ejercicio6("hola mundo adios mundo mundo", "mundo")

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const ejercicio7 = (texto = "") => {
if (!texto) return console.warn("No ingresaste un mensaje de texto")

let textoLimpio = texto.toLowerCase() 
const fraseInversa = () => textoLimpio.split("").reverse().join("")

console.log(fraseInversa() === textoLimpio)
}
//ejercicio7("Salas")

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const ejercicio8 = (texto = "", textoEliminado = "") => {
if (!texto) return console.warn("No ingresaste un mensaje de texto")
if (!textoEliminado) return console.error("No ingresaste el texto a eliminar")

console.log(texto.split(textoEliminado).join(""))
}

//ejercicio8("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")



