import React, { Component } from 'react';

class Autonomia extends Component{

    render() {
        return (
        <>
            <ul>
                <li>Autonomia: { this.props.km }</li>
            </ul>
        </>
        )
    }
}

export default Autonomia;