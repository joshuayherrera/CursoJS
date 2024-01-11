export class Funciones {
    constructor(a,b,...c) {
        this.a = a,
        this.b = b,
        c.forEach((n) => {
            this.n = n
        })
    }

    sumar(a,b,...c){
        let resultado = a + b;
        c.forEach((n) => {
            resultado += n
        })
        return resultado
    }

    restar(a,b,...c) {
        let resultado = a - b;
        c.forEach((n) => {
            resultado -= n
        })

        return resultado
    }

}