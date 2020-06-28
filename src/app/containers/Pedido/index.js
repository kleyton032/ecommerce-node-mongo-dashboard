import React, { Component } from 'react';
import DetalhesDaEntrega from './DetalhesDaEntrega';
import DetalhesDoPedido from './DetalhesDoPedido';
import DetalhesDoPagamento from './DetalhesDoPagamento';


class Pedido extends Component {
    render() {
        return (
            <div className="Pedidos flex vertical">
                <div className="Card">
                    <DetalhesDoPedido />
                </div>
                <div className="flex horizontal">
                    <div className="Card flex-1 flex vertical">
                        <DetalhesDaEntrega />
                    </div>
                    <div className="Card flex-1 flex vertical">
                        <DetalhesDoPagamento />
                    </div>
                </div>

            </div>
        )
    }
}

export default Pedido;