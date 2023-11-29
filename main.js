let eleccion = prompt("Ingrese que genero de pelicula preferis: drama, terror, comedia o aventuras")

function Listas(elect) {

class Lista {
    constructor (genero, pelicula, cancion, libro, comida, bebida){
        this.genero = genero
        this.pelicula = pelicula
        this.cancion = cancion
        this.libro = libro
        this.comida = comida
        this.bebida = bebida
    }
}
const opcion1 = new Lista ("drama", "El dia que no esté", "Tu te has ido", "100 años de soledad", "sushi", "gancia")
const opcion2 = new Lista ("terror", "Noche sangrienta", "Camino al inframundo", "Descubriendo lo oculto", "pizza", "cerveza")
const opcion3 = new Lista ("comedia", "Cena de locos", "Sunshine", "picada", "fernet")
const opcion4 = new Lista ("aventuras", "Desafio al tiempo", "Nada es imposible", "hamburguesa", "daiquiri")

const array = [opcion1, opcion2, opcion3, opcion4]

while (!array.some((Lista)=> Lista.genero == elect)) {
    let select = prompt("Elegí tu genero preferido entre: drama, terror, comedia o aventuras") 
    elect = select
}
alert(`Hay coincidencia para: ${elect.toUpperCase()}. Revisa la consola para ver tu lista de recomendaciones`)
console.log(array.find ((Lista)=> Lista.genero == elect))
console.log(array[1].genero)
let divTitle = document.getElementById("title")
divTitle.innerHTML = "<h1>BIENVENIDO A NUESTRO SITIO DE RECOMENDACIONES</h1>"
let divBotonInicio = document.getElementById("botonInicio")
divBotonInicio.innerHTML = `<input id="botonIniciar" type="button" value="INICIAR">`
let botonEscuchar = document.getElementById("botonIniciar")
botonEscuchar.addEventListener("click", Iniciar)
function Iniciar(){
    let divGeneros = document.getElementById("divGenero")
    for (let i = 0; i < 5; i++) {
        let but = document.createElement("input")
        but.type = "button"
        but.value = `${array[i].genero}`
        but.className = `but${i}`
        divGeneros.appendChild(but)
      
    }
}

}

Listas(eleccion)

let nova = document.getElementsByTagName("input")
nova.addEventListener("click", Sugerir)
function Sugerir(){
    console.log("pepera")
    // for (let i = 0; i < 7; i++) {
    //     let li = document.createElement("li")
    //     li.innerHTML = `${array[i]}`
    //     but0.appendChild(li)
      
    // }

}


// let sugerencias = document.getElementById("options")
// for (const sugerencia of sugerencias){

