let numero= 1;
let cantidad = parseInt(prompt("¿Cuantos trabajos son?"));
let indica = parseInt(prompt(`ya hiciste el ${numero}?`));
let respuesta = "si";

for(numero = 1; numero <= cantidad; numero ++ ){
    prompt (`ya hiciste el ${numero}?`);
    while( indica != respuesta ){
        alert("deverias hacerlo");
        break
    }
}
console.log(numero)