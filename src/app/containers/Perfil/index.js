import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import InputSimples from '../../components/Inputs/Simples';

class Perfil extends Component {

    state = {
        nome: "Usuário TI",
        email: "usuario@lojati.com.br",
        telefone: "81 99999-9999",


        senhaAntiga: "",
        novaSenha: "",
        confirmarNovaSenha: ""

    }

    renderCabecalho() {
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="'h1'" titulo="Perfil" />
                </div>
                <div className="flex-1 flex flex-end">
                    <Button
                        type="success"
                        onClick={() => alert('Salvo')}
                        label={"Salvar"} />
                </div>

            </div>
        )
    }

    renderDadosPerfil() {
        const { nome, email, telefone } = this.state;
        return (
            <div className="dados-configuracoes-perfil">
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor
                            value={nome}
                            name="nome" noStyle
                            handleSubmit={(valor) => this.setState({ nome: valor })} />
                    )} />
                <TextoDados
                    chave="E-mail"
                    valor={(
                        <InputValor
                            value={email}
                            name="email" noStyle
                            handleSubmit={(valor) => this.setState({ email: valor })} />
                    )} />
                <TextoDados
                    chave="Telefone"
                    valor={(
                        <InputValor
                            value={telefone}
                            name="telefone" noStyle
                            handleSubmit={(valor) => this.setState({ telefone: valor })} />
                    )} />
            </div>
        )
    }

    renderDadosSenha() {
        const { senhaAntiga, novaSenha, confirmarNovaSenha } = this.state;
        return (
            <div className="dados-configuracoes">
                <InputSimples
                    type="password"
                    name="senha-antiga"
                    label="Senha Antiga"
                    value={senhaAntiga}
                    onChange={(ev) => this.setState({ senhaAntiga: ev.target.value })} />
                <InputSimples
                    type="password"
                    name="nova-senha"
                    label="Nova Senha"
                    value={novaSenha}
                    onChange={(ev) => this.setState({ novaSenha: ev.target.value })} />
                <InputSimples
                    type="password"
                    name="confirmar-nova-senha"
                    label="Confirmar Nova Senha"
                    value={confirmarNovaSenha}
                    onChange={(ev) => this.setState({ confirmarNovaSenha: ev.target.value })} />
            </div>
        )
    }

    render() {
        return (
            <div className="Perfil full-width">
                <div className="Card">
                    {this.renderCabecalho()}
                    <div className="flex horizontal">
                        <div className="flex-1">
                            {this.renderDadosPerfil()}
                        </div>
                        <div className="flex-1">
                            {this.renderDadosSenha()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Perfil;