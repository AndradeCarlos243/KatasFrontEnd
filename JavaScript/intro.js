console.log("\n*************** Variables *****************\n");
var numero1;
numero1 = 4;
var numero2;
numero2 = 2;
console.log(numero1);
console.log("Numero 1: " + numero1 + " Numero 2: " + numero2);

console.log("\n*************** Cadenas *****************\n");
var frase1;
frase1 = "Ejemplo con comillas dobles";
var frase2;
frase2 = 'Ejemplo con comillas simples';
var frase3;
frase3 = `Ejemplo con comillas invertidas por ejemplo con el numero ${numero2} y la frase: "${frase1}"`

console.log(frase1 + "\n" + frase2 + "\n" + frase3);

console.log("\n*************** Condicionales *****************\n");
console.log(numero1 != numero2);

console.log("\n*************** Operador logico AND *****************\n");
console.log(true && false);


console.log("\n*************** Operador logico OR *****************\n");
console.log(true || false);

console.log("\n*************** Arreglos *****************\n");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];
console.log(listaDeNumeros[3]);

listaDeNumeros.push(17);
listaDeNumeros.push(939);
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer", "LaunchX", "MissionComander", "Inovaccion", "Xalapa", "Los lagos"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[0]);
console.log(palabra.length);


console.log("\n*************** Objetos *****************\n");

let explorer = {
    nombre: "Carlos Alberto Andrade Lopez",
    email: "email@inovaccion.mx",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taqueria", "Pasteleria", "Vacunacion"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}

console.log(explorer);
console.log(explorer.proPer);
console.log(explorer.proPer.personal);