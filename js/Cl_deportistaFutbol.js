import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_deportistaFutbol extends Cl_estudiante {
    constructor(nombre, acumuladoNotas, cantidadMaterias, edad) {
        super(nombre, acumuladoNotas, cantidadMaterias, edad);
    }

    esAdmitido() {
        if (this.calcularPromedio() >= 12 && this.edad >= 19) {
            return true;
        } else {
            return false;
        }
    }

    resultado() {
        if (this.esAdmitido()) {
            return `${this.nombre} es admitido en fútbol`;
        } else {
            return `${this.nombre} no es admitido en fútbol`;
        }
    }
}
