"use strict";
//Tipos de datos
//variable, si se harán cambios en la variable debe ser del mismo tipo de dato, ya que typescript protege el dato
let nombre = "Joan jeje"; //definiendo el tipo de dato a la variable (nombre: string)
nombre = "davi";
console.log(nombre);
let numero = 1;
console.log(numero);
/*
type adress = {
    city?: string;
    country?: string;
    ad : string | number; //tipos union, puede tener dos tipos de dato
}
*/
//creando estudiante
const e1 = {
    firstName: "David",
    lastName: "Garcia",
    // adress : {
    //     ad: "Calle 52",
    // }
};
const e2 = {
    firstName: "Joan",
    lastName: "Fontecha",
    age: 22,
    // adress : {
    //     city : "Bogota",
    //     ad: "Calle 52",
    // }
};
//funcion para mostrar la informacion
//funcion declarativa
function mostrarEstudiante(estudiante) {
    return console.log(estudiante.firstName, estudiante.lastName, estudiante.age);
}
mostrarEstudiante(e1);
//arreglos
//arreglo de tipo estudiante
let estudiantes = [];
//recorrer el arreglo de estudiandes 
//imprimiendo nombre y apellido
//utilizando el metodo de arreglo forEach
estudiantes.forEach(element => {
    console.log(element.firstName, element.lastName);
});
//funciones crud
//funciones para agregar 
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};
agregarEstudiante({
    firstName: "Carlos",
    lastName: "Ortega"
});
agregarEstudiante({
    firstName: "Juan",
    lastName: "Perez"
});
//funcion para eliminar
const eliminarEstudiante = (indice) => {
    estudiantes.splice(indice, 1);
};
// eliminarEstudiante(0);
console.log(estudiantes);
//modificar la funcion de eliminar estudiante para no eliminar por indice si no por apellido
//crear metodo de actualizar estudiante por indice
//funcion para actualizar
const actualizarEstudiante = (indice, estudiante) => {
    estudiantes.splice(indice, 1, estudiante);
};
actualizarEstudiante(1, {
    firstName: "Carlos",
    lastName: "Rodriguez"
});
console.log(estudiantes);
