// models/Consultor.js
class Consultor {
    constructor(nombre, apellidoPaterno, apellidoMaterno, direccion, telefono, codigoConsultor, fechaRegistro, contrasena) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.direccion = direccion;
        this.telefono = telefono;
        this.codigoConsultor = codigoConsultor;
        this.fechaRegistro = fechaRegistro;
        this.contrasena = contrasena;
    }
}

export default Consultor;
