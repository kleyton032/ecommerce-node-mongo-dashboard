import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class Produtos extends Component {

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
                "Categoria": "perifericos",
                "Disponível": "sim",
                "botaoDetalhes": "/produtos/654G564DFGH654"
            },
            {
                "Produto": "Teclado Gamer",
                "Categoria": "perifericos",
                "Disponível": "sim",
                "botaoDetalhes": "/produtos/FGHJ6F875498"
            },
            {
                "Produto": "Teclado Dell",
                "Categoria": "perifericos",
                "Disponível": "sim",
                "botaoDetalhes": "/produtos/233987987DFGHD"
            },
            {
                "Produto": "Teclado HP",
                "Categoria": "perifericos",
                "Disponível": "não",
                "botaoDetalhes": "/produtos/9DF8G9DFGH123F"
            },

        ]
        return (
            <div className="Produtos full-width">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Produtos" />
                    <br />
                    <div className="flex">
                        <div className="flex-3">
                            <Pesquisa
                                valor={pesquisa}
                                placeholder={"Pesquise pelo nome do produto, descrição ou categoria..."}
                                onChange={(ev) => this.onChangePesquisa(ev)}
                                onClick={() => alert("Pesquisar")} />
                        </div>
                        <div className="flex-1 flex vertical">
                            <label>
                                <small>Ordenar por</small>
                            </label>
                            <select defaultValue="">
                                <option>Aleatório</option>
                                <option value={"oaA-Z"}>Ordem Alfabética A-Z</option>
                                <option value={"oaZ-A"}>Ordem Alfabética Z-A</option>
                                <option value={"op-menor"}>Preço Menor</option>
                                <option value={"op-maior"}>Preço Maior</option>
                            </select>
                        </div>

                    </div>
                    <br />
                    <div className="flex">
                        <Tabela
                            cabecalho={["Produto", "Categoria", "Disponível"]}
                            dados={dados} />

                    </div>
                    <Paginacao atual={this.state.atual} total={120} limite={20} onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
                </div>

            </div>

        )
    }
}

export default Produtos;