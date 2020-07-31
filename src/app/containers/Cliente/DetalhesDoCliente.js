import React from 'react'
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import Voltar from '../../components/Links/Voltar';

class DetalhesDoCliente extends React.Component {

    state = {
        nome: "Cliente 1",
        CPF: "111.222.333-45",
        telefone: "81 99999-9999",
        email: "cliente1@hotmail.com",
        dataDeNascimento: "10/01/1990",

        endereco: " Rua qualquer 5252",
        bairro: "Centro",
        cidade: "Nenhuma",
        estado: "PE",
        cep: "50000-000"
    }

    handleSubmit = (field, value) => {
        this.setState({ [field]: value })
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

    renderDetalhesCadastro() {
        const { nome, CPF, email, telefone, dataDeNascimento } = this.state;
        return (
            <div className="Sub-Card">
                <div>
                    <Titulo tipo="h2" titulo="Dados Cadastrais" />
                </div>
                <div className="Detalhes-do-Cadastro">
                    <TextoDados
                        chave="Nome"
                        valor={(
                            <InputValor
                                name="nome" noStyle
                                handleSubmit={(valor) => this.handleSubmit("nome", valor)}
                                value={nome} />
                        )} />
                    <TextoDados
                        chave="CPF"
                        valor={(
                            <InputValor
                                name="cpf" noStyle
                                handleSubmit={(valor) => this.handleSubmit("CPF", valor)}
                                value={CPF} />
                        )} />
                    <TextoDados
                        chave="E-mail"
                        valor={(
                            <InputValor
                                name="email" noStyle
                                handleSubmit={(valor) => this.handleSubmit("email", valor)}
                                value={email} />
                        )} />
                    <TextoDados
                        chave="Telefone"
                        valor={(
                            <InputValor
                                name="telefone" noStyle
                                handleSubmit={(valor) => this.handleSubmit("telefone", valor)}
                                value={telefone} />
                        )} />
                    <TextoDados
                        chave="Data de Nascimento"
                        valor={(
                            <InputValor
                                name="datadenascimento" noStyle
                                handleSubmit={(valor) => this.handleSubmit("dataDeNascimento", valor)}
                                value={dataDeNascimento} />
                        )} />
                </div>
            </div>
        )
    }

    renderDetalhesEntrega() {
        const { endereco, bairro, cidade, estado, cep } = this.state;
        return (
            <div className="Sub-Card">
                <div>
                    <Titulo tipo="h2" titulo="Endereço de Entrega" />
                </div>
                <div className="Detalhes-da-Entrega">
                    <TextoDados
                        chave="Endereço"
                        valor={(
                            <InputValor
                                name="endereco" noStyle
                                handleSubmit={(valor) => this.handleSubmit("endereco", valor)}
                                value={endereco} />
                        )} />
                    <TextoDados
                        chave="Bairro"
                        valor={(
                            <InputValor
                                name="bairro" noStyle
                                handleSubmit={(valor) => this.handleSubmit("bairro", valor)}
                                value={bairro} />
                        )} />
                    <TextoDados
                        chave="Cidade"
                        valor={(
                            <InputValor
                                name="cidade" noStyle
                                handleSubmit={(valor) => this.handleSubmit("cidade", valor)}
                                value={cidade} />
                        )} />
                    <TextoDados
                        chave="Estado"
                        valor={(
                            <InputValor
                                name="estado" noStyle
                                handleSubmit={(valor) => this.handleSubmit("estado", valor)}
                                value={estado} />
                        )} />
                    <TextoDados
                        chave="CEP"
                        valor={(
                            <InputValor
                                name="cep" noStyle
                                handleSubmit={(valor) => this.handleSubmit("cep", valor)}
                                value={cep} />
                        )} />
                </div>
            </div>

        )

    }


    render() {
        return (
            <div className="DetalhesDoCliente">
                <Voltar path="/clientes"/>
                {this.renderCabecalho()}
                <div className="flex horizontal">
                    <div className="flex-1 flex vertical">
                        {this.renderDetalhesCadastro()}
                    </div>
                    <div className="flex-1 flex vertical">
                        {this.renderDetalhesEntrega()}
                    </div>
                </div>

            </div>
        )
    }
}

export default DetalhesDoCliente;