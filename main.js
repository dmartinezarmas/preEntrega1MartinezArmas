function verduleria(){
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
verduleria()

