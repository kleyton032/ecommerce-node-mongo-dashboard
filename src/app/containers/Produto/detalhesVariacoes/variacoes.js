import React, { Component } from 'react'
import Titulo from '../../../components/Texto/Titulo';

class Variacoes extends Component {
    state = {
        variacaoSelecionada: "3FGLKMDS64",
        variacoes: [
            { nome: "P", id: "3FGLKMDS64" },
            { nome: "M", id: "1FGLKMDS67" }
        ]
    }
    render() {
        const { variacoes, variacaoSelecionada } = this.state;
        return (
            <div className="Variacoes flex vertical flex-center">
                <Titulo tipo="h2" titulo="Variações" />
                {
                    variacoes.map((item, idx) => (
                        <div
                            onClick={() => this.setState({ variacaoSelecionada: item.id })}
                            className={`flex flex-center variacao-item ${variacaoSelecionada === item.id ? "variacao-item-ativa" : ""}`}>
                            <span>{item.nome}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Variacoes;