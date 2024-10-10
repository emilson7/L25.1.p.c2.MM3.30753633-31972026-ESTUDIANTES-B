import Cl_deportistaBeisbol from "./Cl_deportistaBeisbol.js";
import Cl_deportistaFutbol from "./Cl_deportistaFutbol.js";

let estudianteBeisbol = new Cl_deportistaBeisbol("Juan", 132, 8, 21);
let estudianteFutbol = new Cl_deportistaFutbol("Félix", 110, 10, 20);

// Obtener el div de salida
let salida = document.getElementById("Salida");

// Función para mostrar los resultados en el formato requerido
let mostrarResultado = (deportista) => {
    let resultadoAdmitido = deportista.resultado(); // Obtener resultado de admisión
    let deporteTipo = deportista instanceof Cl_deportistaBeisbol ? 1 : 2; // Verifica el tipo de deporte

    return `
        <p>Nombre del estudiante: ${deportista.nombre}</p>
        <p>Acumulado de notas: ${deportista.acumuladoNotas}</p>
        <p>Cantidad de materias: ${deportista.cantidadMaterias}</p>
        <p>Deporte (1=beisbol - 2=fútbol): ${deporteTipo}</p>
        <p>Edad: ${deportista.edad}</p>
        <p>Nota promedio: ${deportista.calcularPromedio().toFixed(2)}</p>
        <p>${resultadoAdmitido}</p>
        <hr> <!-- Línea horizontal para separar los estudiantes -->
    `;
};

// Agregar resultados al div de salida
salida.innerHTML = `
    ${mostrarResultado(estudianteBeisbol)}
    ${mostrarResultado(estudianteFutbol)}
`;
