import React from 'react';
import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import moment from 'moment';

class Pedidos extends React.Component {

    state = {
        pesquisa= ""
    }

    onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value })

    render() {
        const { pesquisa } = this.state;

        //DADOS P/ TESTES 
        const dados = [
            {
                "Cliente": "Cliente 1",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDetalhes": "/pedido/90u3tjkmtosmddj"
            },
            {
                "Cliente": "Cliente 2",
                "Valor Total": 100.00,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDetalhes": "/pedido/90u3tjkmtosmddj"
            },
            {
                "Cliente": "Cliente 1",
                "Valor Total": 25.89,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Concluído",
                "botaoDetalhes": "/pedido/90u3tjkmtosmddj"
            }
        ]
        return (
            <div className="Pedidos">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Pedidos" />
                    <br />
                    <Pesquisa>
                        valor={pesquisa}
                        placeholder={"Pesquisa aqui pelo nome do cliente..."}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                    </Pesquisa>
                    <br />
                    <Tabela 
                    cabecalho={["Cliente", "Valor Total", "Data", "Situação"]}
                    dados={dados}/>
                    <Paginacao />
                </div>

            </div>

        )
    }
}

export default Pedidos;