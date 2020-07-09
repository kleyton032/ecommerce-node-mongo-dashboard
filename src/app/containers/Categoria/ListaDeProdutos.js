import React, { Component } from 'react'
import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class ListaDeProdutos extends Component {

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
                "Produto": "Teclado",
                "Estoque": 100,
                "Disponibilidade": "sim",
                "botaoDetalhes": "/produto/94594FD4SF45"
            },
            {
                "Produto": "Teclado Gamer",
                "Estoque": 250,
                "Disponibilidade": "sim",
                "botaoDetalhes": "/produto/35S4G654SGDF"
            },
            {
                "Produto": "Teclado Dell",
                "Estoque": 102,
                "Disponibilidade": "sim",
                "botaoDetalhes": "/produto/DFHJG5D4HJ5"
            },
            {
                "Produto": "Teclado HP",
                "Estoque": 25,
                "Disponibilidade": "não",
                "botaoDetalhes": "/produto/5DG4D56G45DF"
            },


        ]
        return (
            <div className="ListaDeProdutos">
                <br /><hr />
                <Titulo tipo="h3" titulo="Produtos da Categorias" />
                <Pesquisa
                    valor={pesquisa}
                    placeholder={"Pesquisa pelo nome do produto ou descrição..."}
                    onChange={(ev) => this.onChangePesquisa(ev)}
                    onClick={() => alert("Pesquisar")} />
                <br />

                <Tabela
                    cabecalho={["Produto", "Estoque", "Disponibilidade"]}
                    dados={dados} />
                <Paginacao atual={this.state.atual} total={120} limite={20} onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
            </div>

        )
    }
}

export default ListaDeProdutos;