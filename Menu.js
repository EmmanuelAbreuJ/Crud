import promptSync from "prompt-sync";
import { GestorEstudiantes } from "./GestorEstudiantes.js";

const prompt = promptSync();
const gestor = new GestorEstudiantes();

function mostrarMenu() {
    while (true) {
        console.log("\n--- Sistema de Gestión de Estudiantes ---");
        console.log("1. Crear estudiante");
        console.log("2. Listar estudiantes");
        console.log("3. Actualizar estudiante");
        console.log("4. Eliminar estudiante");
        console.log("5. Salir");
        
        const opcion = prompt("Seleccione una opción: ");
        
        switch (opcion) {
            case "1":
                const nombre = prompt("Nombre: ");
                const edad = parseInt(prompt("Edad: "), 10);
                const nivel = prompt("Nivel: ");
                gestor.crearEstudiante(nombre, edad, nivel);
                break;
            case "2":
                gestor.listarEstudiantes();
                break;
            case "3":
                const idActualizar = parseInt(prompt("ID del estudiante: "), 10);
                const nuevoNombre = prompt("Nuevo Nombre: ");
                const nuevaEdad = parseInt(prompt("Nueva Edad: "), 10);
                const nuevoNivel = prompt("Nuevo Nivel: ");
                gestor.actualizarEstudiante(idActualizar, nuevoNombre, nuevaEdad, nuevoNivel);
                break;
            case "4":
                const idEliminar = parseInt(prompt("ID del estudiante a eliminar: "), 10);
                gestor.eliminarEstudiante(idEliminar);
                break;
            case "5":
                console.log("Saliendo...");
                return;
            default:
                console.log("Opción no válida.");
        }
    }
}

export { mostrarMenu };