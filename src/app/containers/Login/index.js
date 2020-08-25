import React, { Component } from 'react'

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button/Simples';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { api, versao } from '../../config/index';

class Login extends Component {
    state = {
        email: "",
        senha: "",
        opcaoLembrar: true,
        erros: {}

    }

    onChangeInput = (field, ev) => {
        this.setState({ [field]: ev.target.value });
        this.validate();
    }
    onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] });

    handleLogin() {
        const { email, senha: password, opcaoLembrar } = this.state;
        if(!this.validate()) return;
        this.props.handleLogin({ email, password, opcaoLembrar }, (error) => {
            alert(error.message)
        })
    }

    validate() {
        const { email, senha } = this.state;
        const erros = {};

        if (!email) erros.email = "Preencha por favor seu E-mail";
        if (!senha) erros.senha = "Preencha por favor sua senha";

        this.setState({ erros })
        return !(Object.keys(erros).length > 0);
    }

    render() {
        const { email, senha, opcaoLembrar, erros } = this.state;
        return (
            <div className="Login flex flex-center">
                <div className="Card">
                    <div className="flex flex-center horizontal">
                        <Titulo tipo="h1" titulo="LOJA IT" />
                    </div>
                    <br />

                    <div className="flex flex-center horizontal">
                        <p>Faça seu login</p>
                    </div>

                    <br />
                    <Input
                        label="E-mail"
                        value={email}
                        type="email"
                        error={erros.email}
                        onChange={(ev) => this.onChangeInput("email", ev)} />

                    <Input
                        label="Senha"
                        value={senha}
                        type="password"
                        error={erros.senha}
                        onChange={(ev) => this.onChangeInput("senha", ev)} />

                    <div className="flex">
                        <div className="flex-1">
                            <Checkbox value={opcaoLembrar}
                                onChange={() => this.onChangeCheckbox("opcaoLembrar")}
                                label="Lembrar-me" />
                        </div>
                        <div className="flex-1 flex flex-end">
                            {/**<Link to="recuperar-senha"><small>Esqueceu sua Senha?</small></Link>*/}
                            <a href={`${api}/${versao}/api/usuarios/recuperar-senha`}>
                                Esqueceu sua Senha?
                            </a>
                        </div>
                    </div>
                    <br />
                    <div className="flex flex-end">
                        <Button type="success" label="ENTRAR" onClick={() => this.handleLogin()} />
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(null, actions)(Login);