import React from 'react';
import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';
import moment from 'moment';

class DetalhesDosPedidos extends React.Component {

    render() {
        //DADOS P/ TESTES 
        const dados = [
            {
                "ID": "90u3tjkmtosmddj",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDetalhes": "/pedido/90u3tjkmtosmddj"
            },
            {
                "ID": "90u3tjkmtosmddj",
                "Valor Total": 100.00,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDetalhes": "/pedido/90u3tjkmtosmddj"
            },
            {
                "ID": "90u3tjkmtosmddj",
                "Valor Total": 25.89,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Concluído",
                "botaoDetalhes": "/pedido/90u3tjkmtosmddj"
            }
        ]
        return (
            <div className="Detalhes-dos-Pedidos">

                <Titulo tipo="h3" titulo="Pedidos Realizados" />
                <br />
                <Tabela
                    cabecalho={["ID", "Valor Total", "Data", "Situação"]}
                    dados={dados} /> 
            </div>

        )
    }
}

export default DetalhesDosPedidos;