import { getHeaders } from './localStorage';
import axios from 'axios';
import { api, versao } from '../config';
import { errorHandLing } from './errorHandling';
import { GET_PEDIDOS } from './types'

export const getPedidos = (atual, limit, loja) => {
    return function (dispatch) {
        axios.get(`${api}/${versao}/api/pedidos/admin?offset=${atual}&limit=${limit}&loja=${loja}`, getHeaders())
            .then(reponse => {
                dispatch({ type: GET_PEDIDOS, payload: reponse.data })
            })
            .catch(errorHandLing);
    }
}