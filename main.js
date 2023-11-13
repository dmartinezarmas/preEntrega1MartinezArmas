/*function verduleria(){
    let nombre = prompt("Ingrese su nombre")
    nombre = nombre.toUpperCase()
    let fruta
    let consulta = 0

    while (consulta==0) {
        fruta = prompt("Ingrese la fruta que desea (Manzana, Banana, Pera, Uva, Naranja")
        fruta = fruta.toLowerCase()
        if (fruta=="manzana"){
        consulta =1}    
        else if (fruta =="banana"){
        consulta =1}
        else if (fruta =="pera"){
        consulta =1}
        else if (fruta =="uva"){
        consulta =1}
        else if (fruta =="naranja"){
        consulta =1
        }
    }
    let kilos = parseInt(prompt("Ingrese los kilos que desea cotizar"))
    switch(fruta){
        case "manzana":
            alert(nombre + " la Manzana te cuesta: $" + kilos*110 + " los " + kilos + "kg")
        break;
        case 'banana':
            alert(nombre + " la Banana te cuesta: $" + kilos*95 + " los " + kilos + "kg")
        break;
        case 'pera':
            alert(nombre + " la Pera te cuesta: $" + kilos*92 + " los " + kilos + "kg")
        break;   
        case 'uva':
            alert(nombre + " la Uva te cuesta: $" + kilos*135 + " los " + kilos + "kg")
        break;
        case 'naranja':
            alert(nombre + " la Naranja te cuesta: $" + kilos*70 + " los " + kilos + "kg")
        break;
        default:
            console.log('Elegí una de las frutas que tenemos')
        break;
    }

}
verduleria()*/
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
}

Listas(eleccion)
