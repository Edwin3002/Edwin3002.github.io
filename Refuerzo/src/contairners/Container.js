import React, { Component } from 'react';
import Componente1 from '../componentes/Componente1';
import Componente2 from '../componentes/Componente2';


export default class Container extends Component {
    render() {
        return (
            <div class="main">
                <Componente1/>
                <Componente2/>

            </div>
        )
    }
}
