import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import BlocoImagens from '../../components/Imagens/Bloco';
import { Link } from 'react-router-dom';


class DetalhesProduto extends Component {

    state = {
        nome: "Produto 1",
        disponibilidade: "disponível",
        descricao: "",
        imagens: [
            "https://dummyimage.com/100x100/de14de/111fed.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111fed.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111fed.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111fed.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111fed.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111fed.jpg&text=exemplo"
        ]
    }


    renderCabecalho() {
        const { nome } = this.state;
        return (
            <div className="flex">
                <div className="flex-1 flex vertical">
                    <Titulo tipo="h1" titulo={nome} />
                    <Link to="/avaliacoes/IJLKMN6565696"><small>Ver Avaliações</small></Link>
                </div>
                <div className="flex-1 flex flex-end">
                    <Button
                        type="success"
                        label="Salvar"
                        onClick={() => alert("Salvo")} />
                </div>
            </div>
        )
    }

    renderDados() {
        const { nome, disponibilidade, descricao } = this.state;
        return (
            <div className="Dados-Produto">
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor
                            value={nome}
                            name="nome" noStyle
                            onChange={(ev) => this.setState({ nome: ev.target.value })} />
                    )} />

                <TextoDados
                    chave="Disponibilidade"
                    valor={(
                        <InputValor
                            value={disponibilidade}
                            name="disponibilidade" noStyle
                            onChange={(ev) => this.setState({ disponibilidade: ev.target.value })} />
                    )} />

                <TextoDados
                    chave="Descricao"
                    valor={(
                        <textarea
                            name={'descricao'}
                            onChange={(ev) => this.setState({ descricao: ev.target.value })}
                            value={descricao}
                            rows="10"
                            style={{ resize: "none" }} />
                    )} />

            </div>
        )
    }

    onRemove() {
        const {imagens} = this.state;
        this.setState ({imagens: imagens.filter((i, idx)=> idx !== i)})
    }

    renderImagens() {
        const { imagens } = this.state;
        return (
            <div className="dados-de-imagens">
                <BlocoImagens 
                imagens={imagens}
                handleSubmit={()=> alert("Enviado")}
                onRemove={this.onRemove}/>

            </div>
        )
    }


    render() {
        return (
            <div className="Detalhes-do-Produto">
                {this.renderCabecalho()}
                <br />
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