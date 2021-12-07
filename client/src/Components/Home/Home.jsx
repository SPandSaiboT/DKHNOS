import React from 'react';
import NuevoPedido from "../NuevoPedido/NuevoPedido";

function Home(){
    return(
        <div class="conatiner col-10 d-flex row justify-content-center">
            <h1>Home</h1>
            <NuevoPedido/>
        </div>
    );
};

export default Home;