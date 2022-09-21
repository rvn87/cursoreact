import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    // useState Hook3
    // const[variable, método para actualizarla] = useState(valor inicial)
    const [age, setAge] = useState(35); 

    const birthday = () => {
        // actualizar el state
        setAge(age + 1);
    }

    return (
        <div>
            <h1>Hola {props.name} <small>(desde componente Funcional)</small></h1>
            <h2>Tu edad es de: {age}</h2>
            <button onClick={birthday}>Aumenta edad</button> 
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
