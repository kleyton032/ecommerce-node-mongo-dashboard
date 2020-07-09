import React from 'react';
import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';


class Categorias extends React.Component {

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
                "Categoria": "Periféricos",
                "Qtd. de Produtos": 35,
                "botaoDetalhes": "/categoria/perifericos"
            },
            {
                "Categoria": "Informática",
                "Qtd. de Produtos": 100,
                "botaoDetalhes": "/cliente/informatica"
            },
            {
                "Categoria": "Gamer",
                "Qtd. de Produtos": 27,
                "botaoDetalhes": "/cliente/gamer"
            },
            {
                "Categoria": "Processadores",
                "Qtd. de Produtos": 15,
                "botaoDetalhes": "/cliente/processadores"
            }
            
        ]
        return (
            <div className="Categorias full-width">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Categorias" />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquisa pela categoria... Ex: Informática"}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")} />
                    <br />
                   
                    <Tabela
                        cabecalho={["Categoria", "Qtd. de Produtos"]}
                        dados={dados} />
                   
                  
                    <Paginacao atual={this.state.atual} total={120} limite={20} onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
                </div>

            </div>

        )
    }
}

export default Categorias;