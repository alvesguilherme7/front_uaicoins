import React from 'react';
import Doacao from './Doacao';
import axios from 'axios';

class ListaDoacao extends React.Component {
    state = {
        doacoes: []
    }

    componentDidMount() {
        axios.get(`https://virtserver.swaggerhub.com/breno5/UaiCoins2/1.0.0/usuarios/1/transacoes`)
            .then(res => {
                const doacoes = res.data;
                this.setState({ doacoes });
            })
    }

    render() {
        const { doacoes } = this.state;
        return (
            <ul> 
                { 
                    doacoes.map(
                        doacao => { return <Doacao key={ doacao.id } data={ doacao } /> }
                    ) 
                }
            </ul>
        )
    }
}

export default ListaDoacao;
