export default class Cl_estudiante {
    constructor(nombre, acumuladoNotas, cantidadMaterias, edad) {
        this.nombre = nombre;
        this.acumuladoNotas = acumuladoNotas;
        this.cantidadMaterias = cantidadMaterias;
        this.edad = edad;
    }

    calcularPromedio() {
        if (this.cantidadMaterias > 0) {
            return this.acumuladoNotas / this.cantidadMaterias;
        }
        return 0;
    }
}
