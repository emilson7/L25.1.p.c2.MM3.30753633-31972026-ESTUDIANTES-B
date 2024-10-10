import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_deportistaBeisbol extends Cl_estudiante {
    constructor(nombre, acumuladoNotas, cantidadMaterias, edad) {
        super(nombre, acumuladoNotas, cantidadMaterias, edad);
    }

    esAdmitido() {
        if (this.calcularPromedio() > 14 && this.edad >= 21) {
            return true;
        } else {
            return false;
        }
    }

    resultado() {
        if (this.esAdmitido()) {
            return `${this.nombre} es admitido en beisbol`;
        } else {
            return `${this.nombre} no es admitido en beisbol`;
        }
    }
}
