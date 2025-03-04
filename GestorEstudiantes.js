import { Estudiante } from "./Estudiante.js";

class GestorEstudiantes {
    constructor() {
        this.estudiantes = {};
    }

    crearEstudiante(nombre, edad, nivel) {
        const nuevoEstudiante = new Estudiante(nombre, edad, nivel);
        this.estudiantes[nuevoEstudiante.id] = nuevoEstudiante;
    }

    listarEstudiantes() {
        console.log("Lista de estudiantes:");
        for (let key in this.estudiantes) {
            console.log(this.estudiantes[key]);
        }
    }

    actualizarEstudiante(id, nombre, edad, nivel) {
        if (this.estudiantes[id]) {
            this.estudiantes[id].nombre = nombre;
            this.estudiantes[id].edad = edad;
            this.estudiantes[id].nivel = nivel;
        } else {
            console.log("Estudiante no encontrado.");
        }
    }

    eliminarEstudiante(id) {
        if (this.estudiantes[id]) {
            delete this.estudiantes[id];
        } else {
            console.log("Estudiante no encontrado.");
        }
    }
}

export { GestorEstudiantes };