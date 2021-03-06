import React, { Component } from 'react'
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import {TextoDados} from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import InputSelect from '../../components/Inputs/Select';
import Voltar from '../../components/Links/Voltar';

class DetalhesDaCategoria extends Component {

    state = {
        nome: "Categoria",
        disponibilidade: "disponivel",
        codigo: "categoria"
    }

    renderCabecalho() {
        const { nome } = this.state;
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h2" titulo={nome} />
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
        const { nome, disponibilidade, codigo } = this.state;
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

                <TextoDados chave="Código"
                    valor={(
                    <InputValor
                        name="codigo" noStyle
                        value={codigo}
                        handleSubmit={(valor) => this.setState({ codigo: valor })}
                    />)}
                />

                <TextoDados
                    chave="Disponibilidade:"
                    valor={(
                        <InputSelect
                        name="disponibilidade"
                        onChange={(ev) => this.setState({ disponibilidade: ev.target.value })}
                        value={disponibilidade}
                        opcoes={[
                            {label: "Disponível", value:"disponivel"},
                            {label: "Indisponível", value:"indisponivel"}
                        ]}/>
                       
                    )} />
            </div>
        )
    }

    render() {
        return (
            <div className="Detalhes-Categoria">
                <Voltar path="/categorias"/>
                {this.renderCabecalho()}
                {this.renderDados()}
            </div>
        )
    }
}

export default DetalhesDaCategoria;