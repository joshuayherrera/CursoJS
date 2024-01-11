const mapa = new Map()

mapa.set("nombre","Joshua");
mapa.set("apellido", "Alvarez");
mapa.set("edad", 17);
//podemos agregar todo tipo de dato
mapa.set(undefined, undefined)
console.log(mapa)

console.log(mapa.has("nombre"))

for (const [key,value] of mapa) {
    console.log(`Llave: ${key}, Value: ${value}`)
}

const mapa2 = new Map([
    ["nombre", "Candy"],
    ["raza", "negra"]
])