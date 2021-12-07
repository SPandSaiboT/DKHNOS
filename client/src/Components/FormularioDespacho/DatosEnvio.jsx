import React, { useState } from 'react';

function DatosEnvio() {
    const [data, setData] = useState({
        inputDespachante: '',
        inputDNI: '',
        inputNumero: '',
        inputDireccionDespacho: '',
        inputCalles: '',
        inputCiudad: '',
        inputProvincia: '',
        inputDia: '',
        inputHorario: '',
    })
    function handleChange(event) {
        setData({
            ...data,
            [event.target.id]: event.target.value
        });
    };
    return (
        <form class="row g-3">
            <div class="col-md-12">
                <label for="inputDespachante" class="form-label">Nombre y Apellido del despachante</label>
                <input type="text" class="form-control" id="inputDespachante" onChange={handleChange} />
            </div>
            <div class="col-md-6">
                <label for="inputDNI" class="form-label">DNI / CUIL / CUIT</label>
                <input type="number" class="form-control" id="inputDNI" onChange={handleChange} />
            </div>
            <div class="col-md-6">
                <label for="inputNumero" class="form-label">Numero de telefono</label>
                <input type="number" class="form-control" id="inputNumero" onChange={handleChange} />
            </div>
            <div class="col-12">
                <label for="inputDireccionDespacho" class="form-label">Direccion de Despacho</label>
                <input type="text" class="form-control" id="inputDireccionDespacho" placeholder="Ej: Av.Corrientes 1234" onChange={handleChange} />
            </div>
            <div class="col-md-6">
                <label for="inputCalles" class="form-label">Entre calles </label>
                <input type="text" class="form-control" id="inputCalles" onChange={handleChange} />
            </div>
            <div class="col-md-3">
                <label for="inputCiudad" class="form-label">Ciudad</label>
                <input type="text" class="form-control" id="inputCiudad" onChange={handleChange} />
            </div>
            <div class="col-md-3">
                <label for="inputProvincia" class="form-label">Provincia</label>
                <input type="text" class="form-control" id="inputProvincia" onChange={handleChange} />
            </div>
            <div class="col-md-6">
                <label for="inputDia" class="form-label">Dia de Retiro</label>
                <input type="text" class="form-control" id="inputDia" onChange={handleChange} />
            </div>
            <div class="col-md-6">
                <label for="inputHorario" class="form-label">Horario de Retiro</label>
                <input type="text" class="form-control" id="inputHorario" onChange={handleChange} />
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Confirmar</button>
            </div>
        </form>
    );
};

export default DatosEnvio;