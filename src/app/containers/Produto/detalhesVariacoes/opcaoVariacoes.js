import React, { Component } from 'react';
import ButtonSimples from '../../../components/Button/Simples';
import InputValor from '../../../components/Inputs/InputValor';
import { TextoDados } from '../../../components/Texto/Dados';
import Titulo from '../../../components/Texto/Titulo';
import BlocoImagens from '../../../components/Imagens/Bloco';
import InputSelect from '../../../components/Inputs/Select';

class OpcaoVariacoes extends Component {
    state = {
        nome: "P",
        disponibilidade: "disponivel",
        preco: 30,
        promocao: 25,
        quantidade: 200,
        peso: 0.750,
        largura: 3,
        altura: 5,
        comprimento: 17,
        imagens: [
            "https://dummyimage.com/100x100/de14de/111f00.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111f00.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111f00.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111f00.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111f00.jpg&text=exemplo",
            "https://dummyimage.com/100x100/de14de/111f00.jpg&text=exemplo"
        ]

    }

    renderCabecalho() {
        const { nome } = this.state;
        return (
            <div className="flex horizontal">
                <div className="flex-1">
                    <Titulo tipo="h3" titulo={`Variação - ${nome}`} />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples
                        type="success"
                        onClick={() => alert('Salvo')}
                        label="Salvar" />
                </div>
            </div>
        )
    }

    renderDadosCadastrais() {
        const { nome, disponibilidade, preco, promocao, quantidade } = this.state;
        return (
            <div className="Dados-cadastrais">
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor
                            value={nome}
                            name="nome" noStyle
                            handleSubmit={(valor) => this.setState({ nome: valor })} />
                    )} />

                <TextoDados
                    chave="Disponibilidade:"
                    valor={(
                        <InputSelect
                            name="disponibilidade"
                            handleSubmit={(ev) => this.setState({ disponibilidade: ev.target.value })}
                            value={disponibilidade}
                            opcoes={[
                                { label: "Disponível", value: "disponivel" },
                                { label: "Indisponível", value: "indisponivel" }
                            ]} />

                    )} />
                <TextoDados
                    chave="Preço Padrão"
                    valor={(
                        <InputValor
                            value={preco}
                            name="preco" noStyle
                            type="number"
                            handleSubmit={(valor) => this.setState({ preco: Number(valor) })} />
                    )} />
                <TextoDados
                    chave="Preço Promocional"
                    valor={(
                        <InputValor
                            value={promocao}
                            name="promocao" noStyle
                            type="number"
                            handleSubmit={(valor) => this.setState({ promocao: Number(valor) })} />
                    )} />
                <TextoDados
                    chave="Quantidade"
                    valor={(
                        <InputValor
                            value={quantidade}
                            name="quantidade" noStyle
                            handleSubmit={(valor) => this.setState({ quantidade:valor })} />
                    )} />
            </div>
        )
    }

    renderDadosEnvio() {
        const { peso, largura, comprimento, altura } = this.state;
        return (
            <div className="Dados-envio">
                <TextoDados
                    chave="Peso"
                    valor={(
                        <InputValor
                            value={peso}
                            name="peso" noStyle
                            type="number"
                            handleSubmit={(valor) => this.setState({ peso:Number(valor) })} />
                    )} />

                <TextoDados
                    chave="Largura (cm)"
                    valor={(
                        <InputValor
                            value={largura}
                            name="largura" noStyle
                            type="number"
                            handleSubmit={(valor) => this.setState({ largura: Number(valor) })} />
                    )} />
                <TextoDados
                    chave="Comprimento (cm)"
                    valor={(
                        <InputValor
                            value={comprimento}
                            name="comprimento" noStyle
                            type="number"
                            handleSubmit={(valor) => this.setState({ comprimento: Number(valor) })} />
                    )} />
                <TextoDados
                    chave="Altura (cm)"
                    valor={(
                        <InputValor
                            value={altura}
                            name="altura" noStyle
                            type="number"
                            handleSubmit={(valor) => this.setState({ promocao: Number(valor) })} />
                    )} />
            </div>
        )
    }

    onRemove() {
        const { imagens } = this.state;
        this.setState({ imagens: imagens.filter((i, idx) => idx !== i) })
    }

    renderImagens() {
        const { imagens } = this.state;
        return (
            <div className="dados-de-imagens">
                <BlocoImagens
                    imagens={imagens}
                    handleSubmit={() => alert("Enviado")}
                    onRemove={this.onRemove} />
            </div>
        )
    }

    render() {
        return (
            <div className="Opcao-variacao">
                {this.renderCabecalho()}
                <br />
                <div className="flex horizontal">
                    <div className="flex-1">
                        {this.renderDadosCadastrais()}
                    </div>
                    <div className="flex-1">
                        {this.renderDadosEnvio()}
                    </div>
                    <div className="flex-1">
                        {this.renderImagens()}
                    </div>
                </div>
            </div>
        )
    }
}

export default OpcaoVariacoes;