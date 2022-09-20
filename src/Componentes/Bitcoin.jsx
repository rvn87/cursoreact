import React, { useState, useEffect } from "react";

function Bitcoin() {
    // bitcoin = variable del estado
    // setBitcoin = funcion que cambia el estado
    // 0 = valor inicial de la variable
    const [bitcoin, setBitcoin] = useState(0); // uso del hook useState

    // hook useEffect hace un componentDidMount cuando renderiza y componentDidUpdate cuando se actualiza
    useEffect(()=>{
        console.log('useEffect : componentDidMount / componentDidUpdate');
    });

    useEffect(()=>{
        console.log('useEffect : shouldComponentUpdate');
    }, []);

    return (
        <div>
            <h3>Cantidad de bitcoins actuales {bitcoin}</h3>
            <button onClick={()=>setBitcoin(bitcoin-1)}>Disminuir</button>
            <button onClick={()=>setBitcoin(bitcoin+1)}>Aumentar</button>
        </div>
    );
}

export default Bitcoin;