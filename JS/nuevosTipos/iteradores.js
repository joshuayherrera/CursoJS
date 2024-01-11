
const iteracion = () => {
    const colores = ["blanco","rojo","amarillo","azul"]
    const i = colores[Symbol.iterator]()
    let iNext = i.next()
    while(!iNext.done){
        console.log(iNext.value);
        iNext = i.next()
    }
}

const iterando = () => {
    const numeros = new Set([0,1,2,3,4,5,6,7,8,8,8,8,9,5,4,3])

    const i = numeros[Symbol.iterator]()

    let i_next = i.next()

    while(!i_next.done){
        console.log(i_next.value)
        i_next = i.next()
    }
}

iteracion()
iterando()