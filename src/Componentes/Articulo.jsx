import React, { Component } from 'react';
import PilasConvencionales from './Pilas';
import BateriasLitio from './Baterias';
import BateriasHidrogeno from './Hidrogeno';
import Likes from './Likes';

class Articulo extends Component{

    render() {
        return (
        <div>
            <PilasConvencionales />
            <BateriasLitio />
            <BateriasHidrogeno />
            <Likes />
        </div>
        )
    }
}

export default Articulo;