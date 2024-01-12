
const persona = {
    nombre: "joshua",
    apellido: "alvarez",
    edad: 17,
    correo: "joshaualvarez@gmail.com"
}

const json = `{"nombre":"joshua","apellido":"alvarez","edad":17,"correo":"joshaualvarez@gmail.com"}`
console.log(JSON.stringify(persona))
console.log(JSON.parse(json))
