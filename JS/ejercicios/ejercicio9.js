/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios. listo
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números. listo
  - Valida que el título no rebase los 100 caracteres. listo
  - Valida que el director no rebase los 50 caracteres. listo
  - Valida que el año de estreno sea un número entero de 4 dígitos. listo
  - Valida que el país o paises sea introducidos en forma de arreglo. listo
  - Valida que los géneros sean introducidos en forma de arreglo. listo
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*. listo
  - Crea un método estático que devuelva los géneros aceptados*. listo
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición. listo
  - Crea un método que devuelva toda la ficha técnica de la película. listo
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, 
Animation, Biography, Comedy, Crime, Documentary ,
Drama, Family, Fantasy, Film Noir, Game-Show, History, 
Horror, Musical, Music, Mystery, News, Reality-TV, 
Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, 
War, Western.
*/

class Pelicula {
  constructor (idIBMD = undefined,titulo= "",director="",anioEstreno = undefined,paisOrigen = undefined, generos= undefined, calificacionIMBD=undefined) {
    //ID IBMD DE LA PELICULA 
    if(idIBMD === undefined) return console.warn("N0 has ingresado el Id de la película")
    if(!typeof idIBMD === "string") return console.error(`${idIBMD} NO es una cadena de texto`)
    const validarId = /^[A-Za-zÑñ]{2}\d{7}$/i
    if(validarId.test(idIBMD)) {
      console.log(`El id: ${idIBMD} ingresado es VÁLIDO`)
    }else {
      console.log(`El id: ${idIBMD} ingresado NO es VÁLIDO`)
    }
    
    //TITULO DE LA PELICULA
    if(titulo === "") return console.warn("NO has ingresado el título de la película")
    if(!typeof titulo === "string") return console.error(`${titulo} NO es un tipo de dato string`)
    const validarTitulo = /^[A-Za-zÑñ0-9\s]{1,100}$/i
    if(validarTitulo.test(titulo)){
      console.log(`${titulo} es un título válido`)
    }else{
      console.log(`${titulo} NO es un título válido`)
    }

    //DIRECTOR DE LA PELICULA
    if(director === "") return console.warn("NO has ingresado el director de la película")
    if(!typeof director === "string") return console.error(`${director} NO es un tipo de dato string`)

    const validarDirector = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,50}$/i
    if(validarDirector.test(director)){
      console.log(`${director} es un nombre válido`)
    }else{
      console.log(`${director} NO es un nombre válido`)
    }

    //AÑO DE ESTRENO DE LA PELICULA
    if(anioEstreno === undefined) return console.warn("NO has ingresado el año del estreno de la película")
    if(!typeof anioEstreno === "number")return console.error(`${anioEstreno} NO es un tipo de dato number`)
    
    const validarAnio = /^[0-9]{4}$/i 
    const diferenciaAnual = new Date().getFullYear() - anioEstreno
    if(validarAnio.test(anioEstreno)){
      if(Math.sign(diferenciaAnual) === -1){
        console.log(`Faltan ${Math.abs(diferenciaAnual)} años para que esa pelicula se estrene`)
      }else if (Math.sign(diferenciaAnual) === 0) {
        console.log(`En este año ${anioEstreno} es el año de estreno`)
      }else {
        console.log(`${anioEstreno} fue el año de estreno`)
      }
    }else{
      console.log(`${anioEstreno} NO es un año VÀLIDO`)
    }

    //PAIS O PAISES DE ORIGEN DE LA PELICULA
    if(paisOrigen === undefined) return console.warn("NO has ingresado el país o paises de origen de la película")
    if(!(paisOrigen instanceof Array)) return console.error(`${paisOrigen} NO has ingresado una instancia de tipo Array`)
    if(!paisOrigen.every(element => typeof element === "string")) return console.error(`Los elementos de ${paisOrigen} NO son tipo string`)

    //GENEROS DE LA PELICULA
    if(generos === undefined) return console.warn("NO has ingresado el género o los géneros de la pelicula")
    if(!(generos instanceof Array)) return console.error(`${generos} NO es una instancia de tipo Array`)
    if(!generos.every(element => typeof element === "string")) return console.error(`Los elementos de ${generos} NO son tipo string`)
    
    const generosAdmitidos= ["Action", "Adult", "Adventure", 
    "Animation", "Biography", "Comedy", "Crime", "Documentary" ,
    "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", 
    "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", 
    "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", 
    "War", "Western"]
    let validarGenero = false;
    for (let i=0; i< generos.length; i++){
      if(generosAdmitidos.includes(generos[i])){
        validarGenero = true;
      }else{
        validarGenero = false; 
      }
    }
    if(validarGenero === false) return console.error("NO has ingresado un genero correctamente")

    //CALIFICACION IMBD DE LA PELICULA
    if(calificacionIMBD === undefined) return console.warn("NO has ingresado la calificación de IMBD")
    if(!typeof calificacionIMBD === "number") return console.error(`${calificacionIMBD} NO es un tipo de dato number`)
    
    const validarCalificacion = /^(10(\.0)?|[0-9](\.\d)?)$/;


    if(validarCalificacion.test(calificacionIMBD)){
      console.log(`Calificacion aprobada`)
    }else{
      console.log(`Calificacion desaprobada`)
    }
    
    this.idIBMD = idIBMD,
    this.titulo = titulo,
    this.director = director,
    this.anioEstreno = anioEstreno,
    this.paisOrigen = paisOrigen,
    this.generos = generos,
    this.calificacionIMBD = calificacionIMBD
    
  } 


  static metodosAceptados(){
    const generosAdmitidos = [
      "Action", "Adult", "Adventure", 
      "Animation", "Biography", "Comedy", "Crime", "Documentary" ,
      "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", 
      "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", 
      "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", 
      "War", "Western"
    ]
    console.log(generosAdmitidos)
  }

  fichaTecnica(){
    console.log(`
    *************************
    ******FICHA TECNICA******
    *************************
    IdIBMD: ${this.idIBMD}
    Titulo: ${this.titulo}
    Director: ${this.director}
    Año de Estreno: ${this.anioEstreno}
    País o Paises de origen: ${this.paisOrigen}
    Generos: ${this.generos}
    Calificación IMBD: ${this.calificacionIMBD}
    `)
  }
}

const Avengers = new Pelicula("zJ3747329","Avengers","Joss Wedon", 2024,["Usa","Germany"],["Action", "Fantasy", "Sci-Fi", "Horror"], 10.5)
console.log(Avengers)

Avengers.fichaTecnica()