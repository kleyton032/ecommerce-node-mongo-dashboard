import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER } from './types';
import { api, versao } from '../config'


// lOCALSTORAGE
const saveToken = (usuario, opcaoLembrar) => {
    if (!usuario.token) return null;
    const [token1, token2, token3] = usuario.token.split('.');
    localStorage.setItem("token1", token1)
    localStorage.setItem("token2", token2)
    localStorage.setItem("token3", token3)
    localStorage.setItem("opcaoLembrar", opcaoLembrar)

}

const cleanToken = () => {
    localStorage.removeItem("token1")
    localStorage.removeItem("token2")
    localStorage.removeItem("token3")
    localStorage.removeItem("opcaoLembrar")
}

const getToken = () => {
    const token1 = localStorage.getItem("token1");
    const token2 = localStorage.getItem("token2");
    const token3 = localStorage.getItem("token3");
    if (!token1 || !token2 || !token3) return null;
    return `${token1}.${token2}.${token3}`;
}

const getHeaders = () => {
    return {
        "headers": {
            "authorization": `Bearer ${getToken()}`
        }
    }
}

export const initApp = () => {
    const opcaoLembrar = localStorage.getItem("opcaoLembrar");
    if (opcaoLembrar === "false") cleanToken();
}

//ERROR HANDLING
const errorHandLing = (error) => {
    if (!error.response || !error.response.data) {
        return { status: 500, message: "Ocorreu um erro no servidor. Tente novamente." }
    }
    if (error.response.data.status === 401) {
        return { status: 401, message: "Você não tem autorização para acessar esses dados" }
    }
    const _erros = error.response.data.err.errors;
    console.log(_erros)
    if (_erros && typeof _erros === "string") return { status: 400, message: _erros }

    let msg = `Erro: Preencha corretamente ${_erros.length > 1 ? "os campos de" : "o campo de"}`;
    _erros.forEach((item, idx) => {
        const field = item.field[item.field.length - 1];
        console.log(field)
        msg += ` ${field}${(_erros.length === idx + 1) ? "." : ","}`
    });
    return { status: 400, message: msg }
}

export const handleLogin = ({ email, password, opcaoLembrar }, callback) => {
    return function (dispatch) {
        axios.post(`${api}/${versao}/api/usuarios/login`, { email, password })
            .then((response) => {
                saveToken(response.data.usuario, opcaoLembrar);
                dispatch({ type: LOGIN_USER, payload: response.data });
            })
            .catch((e) => {
                const error = errorHandLing(e)
                console.log(error)
                callback(error)
            })//callback(errorHandLing(e)));
    }
}

export const getUser = () => {
    return function (dispatch) {
        axios.get(`${api}/${versao}/api/usuarios`, getHeaders())
            .then((response) => {
                saveToken(response.data.usuario, true);
                dispatch({ type: LOGIN_USER, payload: response.data });
            })
            .catch((error) => {
                console.log(error, error.response, error.response.data);
            })
    }
}

export const handleLogout = () => {
    cleanToken();
    return { type: LOGOUT_USER };
}

