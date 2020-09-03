import React from 'react';
import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';
import moment from 'moment';
import * as actions from '../../actions/pedidos';
import {formatMoney} from '../../actions'
import { connect } from 'react-redux';

class Pedidos extends React.Component {

    state = {
        pesquisa: "",
        atual: 0,
        limit: 30
    }

    getPedidosRender() {
        const { atual, limit } = this.state;
        const { usuario } = this.props;
        if(!usuario) return null;
        const loja = usuario.loja;
        this.props.getPedidos(atual, limit, loja);
    }

    componentDidMount() {
        this.getPedidosRender();
    }

    componentDidUpdate(prevProps) {
        if(!this.props.usuario && prevProps.usuario) this.getPedidos();
    }

    onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

    changeNumeroAtual = (atual) => {
        this.setState({ atual }, ()=> {
            this.getPedidosRender();
        });
    }

    render() {
        const { pesquisa } = this.state;
        const { pedidos} = this.props;

        const dados = [];
        (pedidos ? pedidos.docs : []).forEach((item)=> {
            dados.push({
                "Cliente": item.cliente ? item.cliente.nome: "",
                "Valor Total": formatMoney(item.pagamento.valor),
                "Data": moment(item.createdAt).format("DD/MM/YYYY"),
                "Situação": item.pagamento.status !== "Paga" ? item.pagamento.status : item.entrega.status,
                "botaoDetalhes": `/pedido/${item._id}`
            })
        })

        return (
            <div className="Pedidos">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Pedidos" />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquisa aqui pelo nome do cliente..."}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")} />
                    <br />
                    <Tabela
                        cabecalho={["Cliente", "Valor Total", "Data", "Situação"]}
                        dados={dados} />
                    <Paginacao 
                    atual={this.state.atual} 
                    total={this.props.pedidos ? this.props.pedidos.total : 0} 
                    limite={this.state.limit} 
                    onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
                </div>

            </div>

        )
    }
}

const mapStateToProps = state => ({
    pedidos: state.pedido.pedidos,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(Pedidos);