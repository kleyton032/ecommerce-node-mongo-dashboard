import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import ListaDinamica from '../../components/Listas/ListaDinamicaSimples';
import InputValor from '../../components/Inputs/InputValor';

class DetalhesDaEntrega extends Component {

    state = {
        status: [
            "Preparando para Envio",
            "Entregue a Transportadora",
            "Em Trânsito",
        ]
    }

    onAddListaDinamica = (texto) => {
        if (!texto) return false;
        let { status } = this.state;
        status.push(texto);
        this.setState({ status });
    }

    handleSubmit = (value) => {
        this.setState({ codigoRastreamento: value })
        alert('Salvo');
    }

    render() {
        const { status, codigoRastreamento } = this.state;
        return (
            <div className="Detalhes-da-Entrega">
                <Titulo tipo="h4" titulo="Entrega" />
                <br />
                <label>Código de Rastreamento</label>
                <InputValor
                    value={codigoRastreamento}
                    handleSubmit={(value) => this.handleSubmit(value)} 
                    name={"codigoRastreamento"}/>:
                <br />
                <ListaDinamica
                    dados={status}
                    onAddListaDinamica={this.onAddListaDinamica} />
            </div>
        )
    }
}

export default DetalhesDaEntrega;