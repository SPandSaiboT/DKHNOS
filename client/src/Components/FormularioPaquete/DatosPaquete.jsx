import React from 'react';

function DatosPaquete() {
    return (
        <form class="row g-3">
            <div class="col-md-12">
                <label for="inputDescripcion" class="form-label">Descripción</label>
                <input type="text" class="form-control" id="inputDescripcion" placeholder="Una caja de vasos , un piano ,rollo de telas"/>
            </div>
            <div class="col-md-3">
                <label for="inputCantidad" class="form-label">Cantidad</label>
                <input type="text" class="form-control" id="inputCantidad"/>
            </div>
            <div class="col-3">
                <label for="inputPeso" class="form-label">Peso</label>
                <input type="text" class="form-control" id="inputPeso" />
            </div>
            <div class="col-md-6">
                <label for="inputMedidas" class="form-label">Medidas</label>
                <input type="text" class="form-control" id="inputMedidas" />
            </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Confirmar</button>
            </div>
        </form>
    );
};

export default DatosPaquete;