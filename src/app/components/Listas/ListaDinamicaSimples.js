import React, { Component } from 'react';
import ButtonSimples from '../Button/Simples';

    class ListaDinamicaSimples extends React.Component {
        state = {
            texto: ""
        }
        onChangeInput = (ev) => this.setState({ texto: ev.target.value });
        render() {
            const { dados, onAdd, onRemove } = this.props;
            const { texto } = this.state;
            return (
                <div className="flex vertical">
                    {
                        dados.map((item, idx) => (
                            <div key={idx} className="flex horizontal">
                                <div className="flex-3 flex flex-start">
                                    <span>{item}</span>
                                </div>
                                {onRemove && (<div className="flex-1 flex flex-center">
                                    <ButtonSimples type="danger" onClick={() => onRemove(idx)} label=" - " />
                                </div>)}
                            </div>
                        ))
                    }
                    <div className="flex horizontal">
                        <div className="flex-3 flex flex-start">
                            <InputSimples type="text" vale={texto} onChange={this.onChangeInput} />
                        </div>
                        <div className="flex-1 flex flex-center">
                            <ButtonSimples type="success" onClick={() => onAdd(texto)} label=" + " />
                        </div>
                    </div>
                </div>
            )
        }
    }

    export default ListaDinamicaSimples;