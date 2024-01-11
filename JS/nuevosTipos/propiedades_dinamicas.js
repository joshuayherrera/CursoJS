let aleatorio = Math.round(Math.random() * 100 + 5)

const objUsuarios = {
    [`id_${aleatorio}`]: "Valor aleatorio"
}

console.log(objUsuarios);

const usuarios = ["Joshua", "Manuel", "Sofia", "Daniel", "Jose"]

usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario);