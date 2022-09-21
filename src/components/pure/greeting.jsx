import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

    constructor(props) { // propiedades o atributos propios que puede pasarle un html como name, src.. 
        super(props); // super enviará las props al constructor padre: https://overreacted.io/why-do-we-write-super-props/ 

        this.state = { // informacion privada del componente que al modificarla se modificará la vista. algo como las propiedades de la clase
            age: 29
        } // State es privado e inmutable. No puedo modificarlo sin usar una funcion especifica: hay que forzar la regeneracion (mutabilidad) de la vista - necesita el método setState
    }

    birthday = () => { // usamos la funcion flecha para poder usar this asociada a la class y no a los parametros que recibimos
        // setState permite genera un nuevo estado y actualizar la vista.
        this.setState((prevState) => ( // prevState: recibe el estado previo
            {
                age: prevState.age +1
            }
        )) 
        // ! un nuevo estado genera una nueva renderizacion del componente
    }

    render() {
        return (
            <div>
                <h1>Hola {this.props.name}</h1>
                <h2>Tu edad es de: {this.state.age}</h2>
                <button onClick={this.birthday}>Aumenta edad</button> {/* Si le ponemos this.birthday() se ejecutaría */}
            </div>
        );
    }
}

Greeting.propTypes = { // Esto nos da error x consola si no le llegan las props en el formato especificado
    name: PropTypes.string.isRequired,
};

export default Greeting;