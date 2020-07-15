import React, { Component } from 'react';
import Variacoes from './variacoes';
import OpcaoVariacoes from './opcaoVariacoes';

class DetalhesVariacoes extends Component {
    render() {
        return (
            <div className="Detalhes-variacoes">
                <div className="Sub-Card flex-1">
                    <Variacoes />
                </div>
                <div className="Sub-Card flex-6">
                    <OpcaoVariacoes />
                </div>
            </div>
        )
    }
}

export default DetalhesVariacoes;