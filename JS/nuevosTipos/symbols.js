//Symbol crea un identificador unico para cada constante, variable, etc.

let id = Symbol();
let id2 = Symbol();

console.log(id === id2)

const NOMBRE = Symbol("nombre");
const SUMAR = Symbol("sumar");

const persona = {
    [NOMBRE]: "Joshua",
    Apellido: "Alvarez"
}

persona[SUMAR] = (a,b,...c) => {
    let resultado = a + b
    c.forEach((el) => {
        resultado += el
    })
    return resultado
}

console.log(persona)

console.log(persona[SUMAR](2,2,5,6,7))