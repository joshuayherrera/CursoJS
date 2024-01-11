/*(() => {
    console.log("SINCRONA BLOQUEANTE")
    console.log("Inicio")
    
    function dos(){
        console.log(2)
    }

    function uno(){
        console.log(1)
        dos()
        console.log(3)
    }

    uno()
    console.log("Fin")
})()*/

/*(() => {
    console.log("ASINCRONA NO BLOQUEANTE")
    console.log("Inicio")

    function dos(){
        setTimeout(function () {
            console.log(2)
        },1000)
    }

    function uno(){
        setTimeout( () => {
            console.log(1)
        },0)
        dos()
        console.log(3)
    }

    uno()
    console.log("Final")
})()*/

/*//CALLBACKS
function numeroCuadrado (value, callback) {
    setTimeout(() => {
        callback(value, value * value)
    },0 | Math.random()*1000) 
}*/

/*//CALLBACKHELL
numeroCuadrado(10, (value, result) => {
    console.log(`Callback ${value}, ${result}`)
    numeroCuadrado(20, (value, result) => {
        console.log(`Callback ${value}, ${result}`)
        numeroCuadrado(30, (value, result) => {
            console.log(`Callback ${value}, ${result}`)
            numeroCuadrado(40, (value, result) => {
                console.log(`Callback ${value}, ${result}`)
            })
        })
    })
})*/


//PROMISE IN JS (ANOTHER OPTION OF CALLBACKS)

function cuadradoPromise(value) {
    return new Promise ((resolve,reject) => {
        if(typeof value !== "number") {
            return reject(`El valor: "${value}" ingresado no es un número`)
        }else{
            setTimeout(() => {
                resolve({
                    value,
                    result: value * value 
                })
            },0 | Math.random() * 1000)
        }
    })
}

/*
//Ejecutando la Promise Function
cuadradoPromise(0)
.then((obj) => {
    console.log("Inicio de Promise")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(1)
})
.then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(2)
})
.then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(3)
})
.then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise("4")
})
.then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
})
.catch(err => console.error(err))
*/


//Funciones asincronas

const funcionAsincronaExpresada = async () => {
    try {
        console.info(`Inicio de la Asincronia`)

        let obj = await cuadradoPromise(0)
        console.log(`Asincrona: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(1)
        console.log(`Asincrona: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(2)
        console.log(`Asincrona: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(2.3)
        console.log(`Asincrona: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(4)
        console.log(`Asincrona: ${obj.value}, ${obj.result}`)

        console.info(`Fin de la Asincronia`)
    } catch (err) {
        console.error(err)
    }
}

funcionAsincronaExpresada()