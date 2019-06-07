import React from 'react';
import ListaDoacao from './ListaDoacao';
import Doar from './Doar';
import Depositar from './Depositar';
import Retirar from './Retirar';
import AppConstants from '../constantes/AppConstants';

class Conteudo extends React.Component {
  
    
    buscaConteudo(){
        let conteudo = null;

        switch(this.props.acao){
            case AppConstants.ACAO_DOAR:
                conteudo = this.getDoar();
                break;
            case AppConstants.ACAO_RETIRAR:
                conteudo = this.getRetirar();
                break;
            case AppConstants.ACAO_SAIR:
                conteudo = <p> Tela de Login ( Ainda não implementada )</p>;
                break;
            case AppConstants.ACAO_DEPOSITAR:
                conteudo = this.getDepositar();
                break;
            default:
                conteudo = this.getDoacoes();
                break;
        }
        
        return (
            conteudo
        )
    }

    // Acoes 
    getDoacoes(){
       return <div><ListaDoacao /><ListaDoacao /><ListaDoacao /></div>;
    }
    
    getDoar(){
        return (
            <div>
                <ListaDoacao />
                <Doar 
                    isOpen={true} 
                    user={this.props.user} 
                    valorDoacao={ this.props.valorDoacao } 
                />
            </div>
            
        )
    }

    getDepositar(){
        return(
            <div>
                <ListaDoacao />
                <Depositar 
                    isOpen={ true } 
                    user={ this.user }
                />
            </div>
        );
    }

    getRetirar(){
        return(
            <div>
                <ListaDoacao />
                <Retirar 
                    isOpen={true} 
                    valorRetirada={ this.props.valorRetirada }
                />
            </div>
        );
    }

    render() { 
        return (
            <div>
                { this.buscaConteudo() }
            </div>
        )
    }

}

export default Conteudo;
