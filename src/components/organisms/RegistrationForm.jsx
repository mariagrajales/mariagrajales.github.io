// organisms/RegistrationForm.jsx
import React, { useState } from "react";
import FormInput from "../molecules/FormInput";
import Button from "../atoms/Button";
import "./SectionForm.css";

function RegistrationForm({ onAddConsultor }) {
    const [formValues, setFormValues] = useState({
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        direccion: "",
        telefono: "",
        codigoConsultor: "",
        fechaRegistro: "",
        contrasena: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddConsultor(formValues);
        setFormValues({
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            direccion: "",
            telefono: "",
            codigoConsultor: "",
            fechaRegistro: "",
            contrasena: "",
        });
    };

    return (
        <div id="SectionForm">
            <h1>Registro</h1>
            <form id="SectionForm" onSubmit={handleSubmit}>
                <FormInput
                    label="Nombre"
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    value={formValues.nombre}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Apellido Paterno"
                    name="apellidoPaterno"
                    type="text"
                    placeholder="Apellido Paterno"
                    value={formValues.apellidoPaterno}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Apellido Materno"
                    name="apellidoMaterno"
                    type="text"
                    placeholder="Apellido Materno"
                    value={formValues.apellidoMaterno}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Dirección"
                    name="direccion"
                    type="text"
                    placeholder="Dirección"
                    value={formValues.direccion}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Teléfono"
                    name="telefono"
                    type="number"
                    placeholder="Teléfono"
                    value={formValues.telefono}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Código de Consultor"
                    name="codigoConsultor"
                    type="number"
                    placeholder="Código de Consultor"
                    value={formValues.codigoConsultor}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Fecha de Registro"
                    name="fechaRegistro"
                    type="date"
                    placeholder="Fecha de Registro"
                    value={formValues.fechaRegistro}
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Contraseña"
                    name="contrasena"
                    type="password"
                    placeholder="Contraseña"
                    value={formValues.contrasena}
                    onChange={handleInputChange}
                />
                <Button type="submit">Guardar</Button>
            </form>
        </div>
    );
}

export default RegistrationForm;
