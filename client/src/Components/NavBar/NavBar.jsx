import React from 'react';
import yourLogo from "../../Img/your-logo.png"


function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="container-fluid d-flex justify-content-around">
        <a to="/home" class="navbar-brand" href="/landing">
          <img src={yourLogo} alt="" width="90" height="auto" class="img-fluid" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Inicio </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mi cuenta </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mis pedidos </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Servicios </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nosotros </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default NavBar;