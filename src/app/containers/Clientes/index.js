import React from 'react';
import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class Clientes extends React.Component {

    state = {
        pesquisa: "",
        atual: 0
    }

    onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

    changeNumeroAtual = (atual) => this.setState({ atual });

    render() {
        const { pesquisa } = this.state;

        //DADOS P/ TESTES 
        const dados = [
            {
                "Cliente": "Cliente 1",
                "E-mail": "cliente1@hotmail.com",
                "Telefone": "81 99999-9999",
                "CPF": "111.222.333-45",
                "botaoDetalhes": "/cliente/cliente1@hotmail.com"
            },
            {
                "Cliente": "Cliente 1",
                "E-mail": "cliente1@hotmail.com",
                "Telefone": "81 99999-9999",
                "CPF": "111.222.333-45",
                "botaoDetalhes": "/cliente/cliente1@hotmail.com"
            },
            {
                "Cliente": "Cliente 1",
                "E-mail": "cliente1@hotmail.com",
                "Telefone": "81 99999-9999",
                "CPF": "111.222.333-45",
                "botaoDetalhes": "/cliente/cliente1@hotmail.com"
            },
            {
                "Cliente": "Cliente 1",
                "E-mail": "cliente1@hotmail.com",
                "Telefone": "81 99999-9999",
                "CPF": "111.222.333-45",
                "botaoDetalhes": "/cliente/cliente1@hotmail.com"
            },
            
        ]
        return (
            <div className="Clientes full-width">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Clientes" />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquisa aqui pelo nome do cliente..."}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")} />
                    <br />
                    <div className="flex">
                    <Tabela
                        cabecalho={["Cliente", "E-mail", "Telefone", "CPF"]}
                        dados={dados} />
                   
                    </div>
                    <Paginacao atual={this.state.atual} total={120} limite={20} onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
                </div>

            </div>

        )
    }
}

export default Clientes;