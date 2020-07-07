import React, { Component } from 'react'
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import {TextoDados} from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';


class DetalhesDaCategoria extends Component {

    state = {
        nome: "Categoria",
        disponibilidade: "disponivel"
    }

    renderCabecalho() {
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h2" titulo="Categoria" />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples
                        onClick={() => alert("SALVO")}
                        label="Salvar"
                        type="success" />
                    <ButtonSimples
                        onClick={() => alert("REMOVIDO")}
                        label="Remover"
                        type="danger" />
                </div>
            </div>
        )
    }

    renderDados() {
        const { nome, disponibilidade } = this.state;
        return (
            <div className="flex vertical">
                <TextoDados chave="Nome"
                    valor={(
                    <InputValor
                        name="nome" noStyle
                        value={nome}
                        handleSubmit={(valor) => this.setState({ nome: valor })}
                    />)}
                />
                <br />
                <TextoDados
                    chave="Disponibilidade:"
                    valor={(
                        <select value={disponibilidade} onChange={(ev) => this.setState({ disponibilidade: ev.target.value })}>
                            <option value={"disponivel"}>Dísponivel</option>
                            <option value={"indisponivel"}>Indisponivel</option>
                        </select>
                    )} />
            </div>
        )
    }

    render() {
        return (
            <div className="Detlalhes-Categoria">
                {this.renderCabecalho()}
                {this.renderDados()}
            </div>
        )
    }
}

export default DetalhesDaCategoria;