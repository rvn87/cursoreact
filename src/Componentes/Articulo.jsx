import React, { Component } from 'react';
import PilasConvencionales from './Pilas';
import BateriasLitio from './Baterias';
import BateriasHidrogeno from './Hidrogeno';

class Articulo extends Component{

    render() {
        return (
        <div>
            <PilasConvencionales />
            <BateriasLitio />
            <BateriasHidrogeno />
        </div>
        )
    }
}

export default Articulo;