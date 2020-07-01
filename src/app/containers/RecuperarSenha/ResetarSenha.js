import React, { Component } from 'react'

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Button from '../../components/Button/Simples';

class ResetarSenha extends Component {

    state = {
        senha: "",
        confirmarSenha: ""
    }

    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value });

    render() {
        const { senha, confirmarSenha } = this.state;
        return (
            <div className="Resetar-Senha flex flex-center">
                <div className="Card">
                    <div className="flex flex-center">
                        <Titulo tipo="h1" titulo="LOJA IT" />
                    </div>
                    <br />
                    <div>
                        <p>Para reiniciar sua senha digite sa nova senha e confirme no campo abaixo!</p>
                    </div>
                    <br />
                    <div>
                        <Input
                            label="Senha"
                            value={senha}
                            onChange={(ev) => this.onChangeInput("senha", ev)}
                            type="password" />

                        <Input
                            label="Confirmar Senha"
                            value={confirmarSenha}
                            onChange={(ev) => this.onChangeInput("confirmarSenha", ev)}
                            type="password" />
                    </div>
                    <div className="flex flex-end">
                        <Button type="success" rota="/login" label="RESETAR SENHA" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetarSenha;