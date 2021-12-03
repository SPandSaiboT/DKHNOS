import React from 'react';

function DatosEnvio() {
    return (
        <form class="row g-3">
            <div class="col-md-12">
                <label for="inputDespachante" class="form-label">Nombre y Apellido del despachante</label>
                <input type="text" class="form-control" id="inputDespachante"/>
            </div>
            <div class="col-12">
                <label for="inputDireccionDespacho" class="form-label">Direccion de Despacho</label>
                <input type="text" class="form-control" id="inputDireccionDespacho" placeholder="Ej: Av.Corrientes 1234"/>
            </div>
            <div class="col-md-6">
                <label for="inputCalles" class="form-label">Entre calles </label>
                <input type="text" class="form-control" id="inputCalles"/>
            </div>
            <div class="col-md-6">
                <label for="inputCiudad" class="form-label">Ciudad</label>
                <input type="text" class="form-control" id="inputCiudad"/>
            </div>
            <div class="col-md-6">
                <label for="inputDia" class="form-label">Dia de Retiro</label>
                <input type="text" class="form-control" id="inputDia"/>
            </div>
            <div class="col-md-6">
                <label for="inputHorario" class="form-label">Horario de Retiro</label>
                <input type="text" class="form-control" id="inputHorario"/>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Confirmar</button>
            </div>
        </form>
    );
};

export default DatosEnvio;