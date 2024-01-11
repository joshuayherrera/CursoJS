
//Primera manera de crear un set
const set = new Set(["hola",1,true,true,false, "hello", "1", 22,3, 1])
console.log(set)

//Otra manera de crear un set
let set2 = new Set()

set2.add(1)
set2.add(true)
set2.add("hiii")
set2.add(`Esperanza pipipi`)
set2.add("hiii")
set2.add("wiii")
console.log(set2)

//Para contar cuantas posiciones tiene (reemplazo del length)
console.log(set2.size)

//Para buscar cada elemento por separado
const arr = Array.from(set)
console.log(arr[0])

//Para instanciar el set
console.log("********Iterando*********")
set.forEach(element => {
    console.log(element)
});
console.log("**********FIN************")

//Para saber si set tiene un elemento o no
console.log(set.has("hello"))

//Para eliminar un elemento de un set
set2.delete("Esperanza pipipi")
console.log(set2)

//Para limpiar completamente el set
set.clear()
console.log(set)