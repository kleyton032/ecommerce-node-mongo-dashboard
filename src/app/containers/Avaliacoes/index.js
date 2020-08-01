import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';
import Voltar from '../../components/Links/Voltar';
import moment from 'moment';

class Avaliacoes extends Component {

    render() {

        //DADOS P/ TESTES 
        const dados = [
            {
                "Cliente": "Cliente 1",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/68u3tjkmtosmddj"
            },
            {
                "Cliente": "Cliente 2",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/çlkjç46l4kjç56m4kj"
            },
            {
                "Cliente": "Cliente 3",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/wq89e79q84d561f"
            },
            {
                "Cliente": "Cliente 4",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/mn56bvn4m9bn78vm"
            },
            {
                "Cliente": "Cliente 5",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/8974g89fsd7ga89"
            },
            {
                "Cliente": "Cliente 6",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes": "/avaliacao/564gj45fhj645h"
            },

        ]
        return (
            <div className="Avaliacoes full-width">
                <div className="Card">
                    <Voltar path="/produto/ghiug4hj4gh564" />
                    <Titulo tipo="h1" titulo="Avaliações - Produto 1" />
                    <br />
                    <div className="flex">
                        <Tabela
                            cabecalho={["Cliente", "Data"]}
                            dados={dados} />

                    </div>
                </div>

            </div>

        )
    }
}

export default Avaliacoes;