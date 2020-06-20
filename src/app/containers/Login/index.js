import React, { Component } from 'react'

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button/Simples';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        email: "",
        senha: "",
        opcaoLembrar: true
    }

    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value });
    onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] });

    render() {
        const { email, senha, opcaoLembrar } = this.state;
        return (
            <div className="Login">
                <div className="card">
                    <Titulo tipo="h1" titulo="LOJA IT" />

                    <p>Faça seu login</p>

                    <Input
                        label="E-mail"
                        value={email}
                        type="email"
                        onChange={(ev) => this.onChangeInput("email", ev)} />

                    <Input
                        label="Senha"
                        value={senha}
                        type="password"
                        onChange={(ev) => this.onChangeInput("senha", ev)} />

                    <div>
                        <div>
                            <Checkbox value={opcaoLembrar}
                                onChange={() => this.onChangeCheckbox("opcaoLembrar")} />
                        </div>
                        <div>
                            <Link to="recuperar-senha">Esqueceu sua Senha?</Link>
                        </div>
                    </div>
                    <Button type="success" rota="/" label="ENTRAR"/>
                </div>
            </div>
        )
    }
}

export default Login;