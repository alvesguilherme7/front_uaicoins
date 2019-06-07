import React from 'react';
import Doacao from './Doacao';
import axios from 'axios';
import Servidor from '../constantes/Servidor';

class ListaDoacao extends React.Component {
    state = {
        doacoes: []
    }

    componentDidMount() {
        axios.get(`${Servidor.link}/transacoes`)
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
