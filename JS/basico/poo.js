/*****************************PROTOTIPOS*****************************
 function Students (name, lastName, age, career) {
    this.name = name,
    this.lastName = lastName,
    this.age = age,
    this.career = career
}

Students.prototype.bulling = function () {
    console.log(`Soy el mejor oe, acaso no te acuerdas que soy ${this.name}!!`)
}

const Joshua = new Students("Joshua", "Alvarez", 17, "Software Engineer"),
Hugo = new Students("Hugo", "Cahua", 18, "Videogames Developer")

console.log(Joshua)
console.log(Hugo)

Hugo.bulling()

/***********************HERENCIA PROTOTIPICA**********************

function Libro (nombre, autor, fecha_lanzamiento, precio, ventas) {
    this.nombre = nombre,
    this.autor = autor,
    this.fecha_lanzamiento = fecha_lanzamiento,
    this.precio = precio,
    this.ventas = ventas
}

Libro.prototype.vender = function (){
    let descuento = (this.precio*20) / 100;
    let precio_final = this.precio - descuento

    console.log(`Hola a todos soy ${this.autor}, el autor de ${this.nombre}, el precio de mi libro es ahora de ${precio_final} con un gran descuento del 20%`)
}

function Comedia (nombre, autor, fecha_lanzamiento, precio, ventas, comico) {
    this.super = Libro,
    this.super(nombre, autor, fecha_lanzamiento, precio, ventas),
    this.comico = comico
}

Comedia.prototype = new Libro();
Comedia.prototype.constructor = Comedia

const odisea = new Libro("Odin", "Odiseo", 1953, 1000, 400000)
const divinaComedia = new Comedia("Divina Comedia", "jose", 1999, 999, 9348945, true)

console.log(odisea)
odisea.vender()
console.log(divinaComedia)

/**********************CLASES Y HERENCIAS*****************************

class Alumnos {
    //metodo constructor para instanciar
    constructor(name, lastName, age, grade, bestCourse){
        this.name = name,
        this.lastName = lastName,
        this.age = age,
        this.grade = grade,
        this.bestCourse = bestCourse
    }
    //funciones aparte
    saludar () {
        console.log(`Hi my name is ${this.name} and my best asignature am i is in ${this.bestCourse}`)
    }
}

const joshua = new Alumnos("Joshua", "Alvarez", 17, 3, "JavaScript")
console.log(joshua)

class AlumnosIcpna extends Alumnos{
    constructor(name, lastName, age, level, bestSkill ){
        super(name,lastName,age)
        this.level = level,
        this.bestSkill = bestSkill
    }

    saludar(){
        console.log(`I'm ${this.name, this.lastName} and am ${this.level} with my best skill in ${this.bestSkill}`)
    }
}

const Joshua = new AlumnosIcpna("Joshua", "Alvarez Herrera", 17, "Intermediate III", "Listening Comprehension")

console.log(Joshua.saludar())

/****************METODOS ESTATICOS, GETTERS AND SETTERS***************

class Animal {
    constructor (nombre, edad, patas) {
        this.nombre = nombre,
        this.edad = edad,
        this.patas = patas
    }

    andante() {
        console.log(`Soy ${this.nombre} y ando en ${this.patas} patas`)
    }
}

class Gato extends Animal {
    constructor (nombre, edad, patas, cola, pelaje) {
        super(nombre, edad, patas),
        this.cola = null,
        this.pelaje = null
    }
    //No es necesario declarar una constante para llamar la función
    //No se puede utilizar con una constante declarada
    static maullido(){
        console.log("Miau Miau Miau")
    }
    //retorna el valor que obtiene de set
    get getCola() {
        return this.cola
    }
    //da valor a su parametro como en el constructor
    set setCola(cola) {
        this.cola = cola
    }

    get getPelaje() {
        return this.pelaje
    }

    set setPelaje(pelaje) {
        this.pelaje = pelaje
    }
}
Gato.maullido()

const gato = new Animal("Candy", 2, 4)
gato.andante()

const garfield = new Gato("Garfield", 5, 4)
garfield.setCola = true;
console.log(garfield.getCola)
console.log(garfield)
garfield.setPelaje = "Negro con blanco y anaranjado"
console.log(garfield.getPelaje)
console.log(garfield)

*/





