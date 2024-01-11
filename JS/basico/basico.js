/*******************************************************/
                   /*1. Tipos de Datos.*/
/*******************************************************/

/*let joshua="The goat xd";
const lorem="    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Beatae consequatur suscipit similique sint corrupti. Sint magni temporibus 
ea tenetur, animi cumque repudiandae aperiam at, ex nostrum, obcaecati 
dolore excepturi tempora?       ";
console.log(
lorem.length,
lorem.split(","),
lorem.toLowerCase(),
"***********************",
lorem.toUpperCase(),
lorem.trim()//para eliminar los espacios del inicio y final.
);*/

//usar `para identar el codigo mas facil`

/*
let name = "joshua",
firstName = "alvarez",
age = 17
console.log(`Mi nombre es ${name} ${firstName} ${age}`)

/*******************Datos Numericos************************

let a = 9.3,
b = "10.2",
c = a + b,
d = 14.333;

console.log(d.toFixed(1)) //Para mostrar cuantos decimales queremos.
console.log(a + parseFloat(b))
console.log(a + parseInt(b))
console.log(typeof(a) + " "+ typeof(b)) 



/***********Diferencias entre null, undefined and NaN***********

//No tiene valor, definido por js
let undefinedd;
console.log(undefinedd)
//No tiene valor definido por mi
let nulo = null;
console.log(nulo)
//NaN = Not-a-Number
let noEsUnNumero= "joshua" * 7;
console.log(noEsUnNumero)

/************************FUNCIONES*****************************
//EJEMPLO DE UNA FUNCION CON PARAMETROS:
let edad=18;

function bienvenido (nombre="Invitado", edadParametr = edad) {
    console.log(`Sea bienvenido/a estimado/a ${nombre} con la edad de ${edadParametr} años`)
}

bienvenido();

//funciones declaradas
function josh () {
    console.log("Es una función que puedes llamarla antes o después de ser creada");
}

//funciones expresadas
const joshua = function () {
    console.log("Es una función donde no se puede llamar antes de ser creada.")
}

//LLAMAMOS A LAS FUNCIONES AL FINAL PARA UN CODIGO MEJOR ORDENADO
joshua();
josh();

/*************************ARRAYS*******************************

const a=[]
b=[1,2,"hola",false, ["A","B","C",["X","Y","Z"]]]
c = Array.of(1,9,2)
//Para rellenar los 10 elementos del array con true.
const d = Array(10).fill(true)

const materiales = ["Oro","Plata","Cobre"]
materiales.push("Bronce")

console.log(a)
console.log(b[4])
console.log(b[4])

materiales.forEach(function (el, id) {
    console.log(`<div id="${id}">${el}</div>`)
})

/***********************OBJETOS******************************* 

const joshua = {
    nombre: "Joshua",
    apellidos: ["Alvarez","Herrera"],
    edad: 17,
    contacto: {
        email: "joshaualvarez@gmail.com",
        numero: 935427263,
        direccion: "Solitario de Sayán 643",
        github: "joshuayherrera",
        facebook: "Joshua Alvarez"
    },
    altura: 1.79,
    saludar: function () {
        console.log(`Hey!, Mi nombre es ${this.nombre} 
        ${this.apellidos[0]} ${this.apellidos[1]} con la edad 
        de ${this.edad} años, puedes contactarme por mi github: 
        ${this.contacto.github} o mi facebook: ${this.contacto.facebook}`)
    } 
}

console.log(joshua.nombre)
console.log(joshua.apellidos)
console.log(joshua.edad)
joshua.saludar()

console.log(Object.keys(joshua))
console.log(Object.values(joshua))
*/

/*************************************************************/
/*                 2.ESTRUCTURAS DE CONTROL
/************************************************************/

/******************TIPOS DE OPERADORES***********************
//OPERADORES LOGICOS
!-NOT
|| OR
&& AND

//OPERADOR TERNARIO, (SOLO UNA CONDICION)
let edad = 17;

const eresMayor = (edad>=18) ? "Eres mayor de edad" : "Eres menor de edad"

console.log(eresMayor)

//SWITCH AND CASE
switch(key){
    case ():
        console.log(e)
        break;
    defaul:
        break;
}

/***************************BUCLES******************************
 
let colors = ["White", "Red", "Yellow"]
for (i=0; i<colors.length; i++){
    console.log(`Color Nº ${i+1}: ${colors[i]}`)
}

//for of recorre cada key de un objeto
const joshua = {
    firstName: "Joshua",
    lastNames: ["Alvarez Herrera"],
    age: 17,
    nacionality: "American" 
}

for (const i in joshua) {
    console.log(`Key: ${i}, Value: ${joshua[i]}`)
}

let text = "This is a simple text"

//recorre cada elemento de un arreglo o cadenas de texto
for (const i of text) {
    console.log(i)
}

for (const i of colors) {
    console.log(i)
}

/**********************MANEJO DE ERRORES************************
try {
    console.log("Mensaje de prueba")
    esUnError;
    console.log("Este mensaje no debe aparecer")
} catch (error) {
    console.log("Tu codigo tiene un error")
}

try {
    let edad = "y";
    if(isNaN(edad)){
        throw new Error("No es un número")
    }

    const eresMayor = (edad>= 18) ? "Eres mayor de edad" : "No eres mayor de edad"

    console.log(eresMayor)
} catch (error) {
    console.log(`Tu codigo tiene el siguiente: ${error}`)
}

/**********************BREAK & CONTINUE***************************
let numbers = [2,3,4,5,6,7,8,9,0,1]
//break rompe cuando el item i complete las 6 iteraciones
for (let i = 0; i < numbers.length ; i++) {
    if( i === 6 ){
        break;
    }
    console.log(numbers[i])
}
//continue deja que complete las 6 iteraciones, se salta el que le sigue pero continua con lo demas
for (let i = 0; i < numbers.length ; i++) {
    if( i === 6 ){
        continue;
    }
    console.log(numbers[i])
}

/***********************DESTRUCTURACIÓN**************************
let numeros = [2,3,5,78];

//Destructurando

let [two, three, five, seventy_eight] = numeros;
console.log(seventy_eight, three, five, two)

//Destructurando un objeto
const joshua = {
    nombre: "joshua",
    apellido: "alvarez",
    edad: 17,
    profesion: "Ingenieria de software"
}

//los nombres destructurados deben ser los mismos que las llaves
let {nombre, apellido, edad, profesion} = joshua;
console.log(profesion,"alumno:",nombre)

/*********************OBJETOS LITERALES**************************
//puedo reutilizar variables en mis objetos siempre y cuando tengan 
el mismo nombre. (nueva forma para crear funciones dentro de un objeto.)
let nombre = "candy",
edad = 2

const gata = {
    nombre,
    edad,
    raza: "cruzada",
    maullar(){
        console.log("miau miau miau")
    }
}

console.log(gata)
gata.maullar()


/**********************PARAMETROS REST**************************
function sumar (a,b,...x) {
    let resultado = a+b;
    x.forEach(function (n){
        resultado += n
    })

    return resultado
}

console.log(sumar(2,3))
console.log(sumar(2,3,4))
console.log(sumar(2,3,4,5))
console.log(sumar(2,3,6,78,8))

function multiplicar (x,y,...z) {
    let result = x * y;
    z.forEach(function (n) {
        result *= n
    });
    return result
}

console.log(multiplicar(2,3,3,3,2))

/***********************OPERADOR SPREAD*************************
//para juntar arrays
const arr1 = ["white" , "red", "yellow"],
arr2 = [1, 2, 3, 4]

const arr3 = [...arr1, ...arr2]
console.log(arr3)


/***********************ARROW FUNCTIONS***********************

//No usar las arrow functions en un objeto ya que toma de referencia
al dom y no al objeto.

const gata = ["candy", "negra", 2]
gata.forEach((el, i) => console.log(`${i+1} = ${el}`))

const sumar = (a,b) => console.log(a+b)
sumar(2,3)

*/





































