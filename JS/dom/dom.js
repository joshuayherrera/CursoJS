/* EL NAVEGADOR HABLA POR LA API DE SPEECH
let texto = "Hola amigo, mi nombre es Joshua Alvarez y estare viendo todo al respecto del DOM en JavaScript con HTML!"

const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}

hablar(texto)*/

//INTRODUCCION
/* console.log("********** Elementos del Documento **********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);
document.write("<h2>Hola Mundo desde el DOM</h2>"); */





/*// NODOS, ELEMENTOS Y SELECTORES
//Obtiene el elemento por id rapidamente
console.log(document.getElementById("menu"))
//obtiene cualquier tipo de elemento pero especificandolo(mas lento)
console.log(document.querySelector("#menu"))
//obtiene solamente el primer elemento que encontro de lo que buscas
console.log(document.querySelector("a"))
//obtiene todos los elementos pedidos
console.log(document.querySelectorAll("a"))

document.querySelectorAll("a").forEach(el => console.log(el));

console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])
*/





/*
//obtener atributos
console.log(document.documentElement.getAttribute("lang"))
//Obtener informacion por medio de una clase
console.log(document.documentElement.querySelector(".link-dom").getAttribute("href"))
//Cambiarle otro atributo.
document.documentElement.setAttribute("lang","es-PE")
//Obtener el atributo con el cambio hecho
console.log(document.documentElement.getAttribute("lang"))

const $linkDOM = document.querySelector(".link-dom")

$linkDOM.setAttribute("target", "_blank")
$linkDOM.setAttribute("rel","noopener")
$linkDOM.setAttribute("href","https://www.youtube.com")
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))






//Data-Attributes
//Agrega una data-description
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento")
//imprime el objeto que obtiene todos los data-
console.log($linkDOM.dataset)
//Agrego un data-id
$linkDOM.setAttribute("data-id","123")
//Acedo al id por el .(nombre)
console.log($linkDOM.dataset.id)

//Otra manera de Agregar nuevos valores a un data Attribute
$linkDOM.dataset.id = 222
console.log($linkDOM.dataset.id)
$linkDOM.dataset.description = "Aprendiendo usar los data attributes"
console.log($linkDOM.dataset)
//Comprobar que exista un data attribute y removerlo
console.log($linkDOM.hasAttribute("data-id"))
console.log($linkDOM.removeAttribute("data-id"))
console.log($linkDOM.hasAttribute("data-id"))
*/






/*
const $linkDOM = document.querySelector(".link-dom") 

console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));







//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);
*/ 








/*
const $card = document.querySelector(".card")

console.log($card.classList)

console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.remove("rotate-45")
//toggle funciona que si lo tiene lo elimina pero si no, lo pone
$card.classList.toggle("rotate-45")
$card.classList.toggle("rotate-45")
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45", "rotate-135")
$card.classList.add("opacity-80", "sepia")
$card.classList.remove("opacity-80", "sepia")*/






/*DOM: TEXTO Y HTML
const $whatIsDOM = document.getElementById("que-es")

let text = `
  <p> 
    Hola putossssssssssssssssssssssssssssssssssssssss
  </p>
  <p> 
    Aqui practicando como modificar el texto con js
  </p>
`
//reemplaza el texto que tiene la clase
$whatIsDOM.innerHTML = text;

//reemplaza la clase por el texto
$whatIsDOM.outerHTML = text;*/





/*//DOM TRAVERSING: RECORRIENDO EL DOM
const $cards = document.querySelector(".cards");

console.log($cards.children)
console.log($cards.firstElementChild)
console.log($cards.children[2])
console.log($cards.lastElementChild)
console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)
//el padre mas cercano
console.log($cards.children[3].closest("section"))
*/






/*//DOM: Creando Elementos y Fragmentos
const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("CAT"),
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure"),
$figure3 = document.createElement("figure")

//Primer metodo que crea un nodo en html
$img.setAttribute("src", "https://loremflickr.com/205/200")
$img.setAttribute("alt", "CAT")
$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$figure.setAttribute("class", "card")
$cards.appendChild($figure)

//Usando innerHTML
$figure2.innerHTML = `
  <img src="https://loremflickr.com/206/200" alt="cat">
  <figcaption>CAT</figcaption>
`
$figure2.setAttribute("class","card")
$cards.appendChild($figure2)

//Practicando innerHTML
$figure3.setAttribute("class","card")
$figure3.innerHTML = `
  <img src="https://loremflickr.com/207/200" alt="CAT">
  <figcaption>CAT</figcaption>
`
$cards.appendChild($figure3)

//estaciones
const estaciones = ["Verano", "Otoño", "Primavera", "Invierno"],
$ul= document.createElement("ul"),
$h3 = document.createElement("h3")
$h3.textContent = "Estaciones del Año"

document.body.appendChild($h3)
document.body.appendChild($ul)
estaciones.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el
  $ul.appendChild($li)
})

//materias
const materias = ["Matematicas", "Ingles", "Biologia", "Quimica"],
$ul2 = document.createElement("ul"),
$h32 = document.createElement("h3")
$h32.textContent = "Materias Colegio"

document.body.appendChild($h32)
document.body.appendChild($ul2)

materias.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el;
  $ul2.appendChild($li)
})

//Una mejor version (Continentes)
const continentes = ["America", "Oceania", "Europa", "Asia", "Antartida"],
$ul3 = document.createElement("ul"),
$h2 = document.createElement("h2")
$h2.textContent= "Continentes"

document.body.appendChild($h2)
document.body.appendChild($ul3)

continentes.forEach(el => $ul3.innerHTML += `<li>${el}</li>`)

//Colores 
const colores = ["rojo", "negro", "blanco", "azul"],
$ul = document.createElement("ul"),
$h3 = document.createElement("h3")
$h3.textContent = "*COLORES*"

document.body.appendChild($h3)
document.body.appendChild($ul)

colores.forEach(el => $ul.innerHTML += `<li>${el}</li>`)




//LA MEJOR VERSION (DEFINITIVA) 
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],
$ul = document.createElement("ul"),
$fragment = document.createDocumentFragment(),
$h3 = document.createElement("h3")
$h3.textContent = "Los meses del Año"

meses.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el
  $fragment.appendChild($li)
})

$ul.appendChild($fragment)
document.body.appendChild($h3)
document.body.appendChild($ul)
*/






/* TEMPLATES HTML

const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-id").content,
$fragment = document.createDocumentFragment(),
cardsContent = [
  {
    title: "CAT",
    img: "https://loremflickr.com/206/200"
  },
  {
    title: "I DON'T KNOW",
    img: "https://loremflickr.com/207/200"
  },
  {
    title: "We'll see",
    img: "https://loremflickr.com/208/200"
  }
]

cardsContent.forEach(el => {
  $template.querySelector("img").setAttribute("src", el.img)
  $template.querySelector("img").setAttribute("alt", el.title)
  $template.querySelector("figcaption").textContent = el.title

  //Template es solamente una guia pero necesitamos clonar su contenido
  let $clone = document.importNode($template, true) //true se refiere que copie todo el contenido interno
  $fragment.appendChild($clone)
})

$cards.appendChild($fragment)
*/





/* MODIFICANDO ELEMENTOS (OLD STYLE)
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true)

$newCard.innerHTML = `
  <img src="https://loremflickr.com/199/200" alt="cat">
  <figcaption>CATTTTT<figcaption>
`;
$newCard.classList.add("card")

//replace the newCard by the element number 2
//$cards.replaceChild($newCard, $cards.children[2])

//The parameter need to be what element wants to remove
//$cards.removeChild($cards.lastElementChild);

//Insert before the first card
//$cards.insertBefore($newCard, $cards.firstElementChild)

document.body.appendChild($cloneCards)
*/





/* MODIFICANDO ELEMENTOS (COOL STYLE) 
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://loremflickr.com/200/201" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
//$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); 
//$cards.prepend($newCard); primer hijo
//$cards.append($newCard); ultimo hijo
//$cards.before($newCard);
//$cards.after($newCard);
*/







/* MANEJADORES DE EVENTOS
function holaMundo () {
  alert("Hola mundooooo");
}

//EVENTOS SEMANTICOS
const $eventoSemantico = document.getElementById("evento-semantico")
//la funcion no va con () ya que lo ejecuta instantaneamente.
//$eventoSemantico.onclick = holaMundo;

//Los eventos semanticos solamente ejecutan 1 evento
//el unico parametro (e) => event
$eventoSemantico.onclick = function (e) {
  alert("Hello World my bro")
  console.info(e)
}


//EVENTOS MULTIPLE
const $eventoMultiple = document.getElementById("evento-multiple")

//Ya no va con on-name solamente el tipo de evento
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("hiiiiiiiii bros")
  console.log(e)
})

*/





/*EVENTOS CON PARAMETROS Y REMOVER EVENTOS

const $eventoMultiple = document.getElementById("evento-multiple"),
$removerEvento = document.getElementById("remover-evento")

const holaMundo = () => alert("Hola Mundou")
const saludar = (nombre = "Desconocido", e) => alert(`hola mi queridisimo ${nombre}`) 

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", function (e) {
  alert("Segundo mensaje aqui comando xd")
  console.log(e)
})

//CON LAS ARROW FUNCTIONS PODEMOS PASARLE LOS PARAMETROS QUE NECESITEMOS SIEMPRE Y CUANDO LA FUNCION TENGA ()
$eventoMultiple.addEventListener("click", () => saludar())

$eventoMultiple.addEventListener("click", () => saludar("JOSHUAA"))

function remover (e) {
  alert("REMOVIENDO EL EVENTO PARA QUE SE EJECUTE 1 VEZ")
  console.log(e)
  $removerEvento.removeEventListener("dblclick",remover)
  $removerEvento.disabled = true;
}

$removerEvento.addEventListener("dblclick", remover)
*/





/*FLUJO DE EVENTO (BURBUJA Y CAPTURA)
const $divsEventos = document.querySelectorAll(".eventos-flujo div")

function flujoEventos (e) {
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
}
console.log($divsEventos);
$divsEventos.forEach(div => {
  //FASE DE BURBUJA
  //div.addEventListener("click", flujoEventos)
  //div.addEventListener("click", flujoEventos, false)

  //FASE DE CAPTURA
  div.addEventListener("click", flujoEventos,{
    capture: true,
    once: true
  })
})
*/







/* preventDefault & Delegacion de Eventos

function flujoEventos(e) {
  console.log(`El click lo origino ${e.target.className}`)
}

document.addEventListener("click",e => {
  if (e.target.matches(".eventos-flujo div")){
    flujoEventos(e)
  }

  if(e.target.matches(".linkDiv")){
    alert("Este link es para ir a youtube pero lo cancele jeje")
    e.preventDefault()
  }

  console.log("Click en", e.target)
})
*/






/*PROPIEDADES Y EVENTOS

/*
El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.

El evento load se dispara cuando se ha detectado la carga completa de la página.

Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado.

Peticiones asíncronas pausan el parseo del DOM.
*/
/* window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********** Evento Resize **********");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); */


/* BOM: METODOS
const $btnAbrir = document.getElementById("btn-abrir"),
$btnCerrar = document.getElementById("btn-cerrar"),
$btnImprimir = document.getElementById("btn-imprimir")

let ventana;
$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://www.youtube.com")
})

$btnCerrar.addEventListener("dblclick", (e) => {
  ventana = window.close()
})

$btnImprimir.addEventListener("click", (e) => {
  ventana = window.print()
})

*/






/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */
/* console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);
//history.back(2);

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */


