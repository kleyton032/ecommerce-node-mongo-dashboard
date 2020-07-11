import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples';
import TextoDados from '../../components/Texto/Titulo';
import InputValor from '../../components/Inputs/InputValor';


class DetalhesProduto extends Component{

    state = {
        nome: "Produto 1",
        disponibilidade: "disponível",
        descricao: ""
    }


    renderCabecalho(){
        return(
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" Titulo={nome}/>
                </div>
                <div className="flex-1 flex flex-end">
                    <Button
                    type="success"
                    label="Salvar"
                    onClick={() => alert("Salvo")}/>
                </div>

            </div>
        )
    }

    renderDados(){
        return(
            <div className="Dados-Produto">
                <TextoDados
                chave="Nome"
                valor={(
                    <InputValor
                    value={nome}
                    name="nome"
                    onChange={(ev)=> this.setState({nome: ev.target.value})}/>
                )}/>

            </div>
        )
    }


    render(){
        const {nome} = this.state;
        return(
            <div className="Detalhes-do-Produto">
                {this.renderCabecalho()}
                <br/>
                <div className="flex horizontal">
                    <div className="flex-1 flex vertical">
                    {this.renderDados()}
                    </div>
                    <div className="flex-1 flex vertical">
                    {this.renderImagens()}
                    </div>

                </div>
            </div>
        )
    }
}

export default DetalhesProduto;