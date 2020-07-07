import React, { Component } from 'react'

import DetalhesDaCategoria from './DetalhesDaCategoria';
//import ListaDeProdutos from './ListaDeProdutos'

class Categoria extends Component {
    render() {
        return (
            <div className="Categora full-width">
                <div className="Card">
                    <div>
                        <DetalhesDaCategoria />
                    </div>

                    <div>
                        {/**<ListaDeProdutos />*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Categoria;