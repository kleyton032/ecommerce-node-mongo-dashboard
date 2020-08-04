import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples';

class Configuracoes extends Component {


    renderCabecalho(){
        return(
           <div className="flex">
               <div className="flex-1 flex">
                   <Titulo tipo="'h1'" titulo="Configurações"/>
               </div>
               <div className="flex-1 flex flex-end">
                   <Button
                   type="success"
                   onClick={() => alert('Salvo')}
                   label={"Salvar"}/>
               </div>
   
           </div> 
        )
    }
   


    render() {
        return (
            <div className="Configuracoes">
                <div className="Card">
                    {this.renderCabecalho()}
                    <div className="flex horizontal">
                        <div className="flex-1">
                            {this.renderDadosConfiguracoes()}
                        </div>
                        <div className="flex-1">
                            {this.renderDadosEndereco()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 export default Configuracoes;