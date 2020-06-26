import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples'
import { TextoDados } from '../../components/Texto/Dados';
import TabalaSimples from '../../components/Tabela/Simples';
class DetalhesDoPedido extends Component {

    renderCabecalho() {
        return (
            <div>
                <div>
                    <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 01/06/2020" />
                </div>
                <div>
                    <ButtonSimples type="danger" label="CANCELAR PEDIDO" onClick={() => alert("Cancelado")} />
                </div>
            </div>
        )
    }

    renderDadosDoCliente() {
        return (
            <div>
                <Titulo tipo="h4" titulo="Dados do Cliente" />
                <br />
                <TextoDados chave="Nome:" valor="Cliente 1" />
                <TextoDados chave="CPF:" valor="111.222.666.89" />
                <TextoDados chave="Telefones:" valor="81 88888-8888" />
                <TextoDados chave="Data de Nascimento:" valor="01/01/1990" />
            </div>
        )
    }

    renderDadosDeEntrega() {
        return (
            <div>
                <Titulo tipo="h4" titulo="Dados da Entrega" />
                <br />
                <TextoDados chave="Endereço:" valor="Rua Qualquer" />
                <TextoDados chave="Bairro:" valor="Centro" />
                <TextoDados chave="Cidade:" valor="Nenhuma" />
                <TextoDados chave="Estado:" valor="Pernambuco" />
                <TextoDados chave="CEP" valor="50000-000" />
            </div>
        )
    }

    renderDadosDePagamento() {
        return (
            <div>
                <Titulo tipo="h4" titulo="Dados do Pagamento" />
                <br />
                <TextoDados chave="Taca de Entrega:" valor="R$ 16,50 (PAC)" />
                <TextoDados chave="Valor do Pedido:" valor="R$ 40,00" />
                <TextoDados chave="Valor Total:" valor="R$ 56,50" />
                <TextoDados chave="Forma de Pagamento:" valor="BOLETO" />
            </div>
        )
    }

    renderDadosDoCarrinho(){
        const dados = [
            {
                "Produto": "Produto 1",
                "Preço Und.": "R$ 20,00", 
                "Quantidade": "1", 
                "Preço Total": "R$ 20,00"
            },
            {
                "Produto": "Produto 2",
                "Preço Und.": "R$ 20,00", 
                "Quantidade": "1", 
                "Preço Total": "R$ 20,00"
            }
        ]
        
        return(
            <div>
                <Titulo tipo="h4" titulo="Carrinho"/>
                <br/>

                <TabalaSimples cabecalho={"Produto", "Preço Und.", "Quantidade", "Preço Total"} dados={dados}/>
                
            </div>
        )
    }

    render() {
        return (
            <div className="Detalhes-do-Pedido">
                {this.renderCabecalho()}
                {this.renderDadosDoCliente()}
                {this.renderDadosDoCarrinho()}
                {this.renderDadosDeEntrega()}
                {this.renderDadosDePagamento()}
            </div>
        )
    }
}

export default DetalhesDoPedido;