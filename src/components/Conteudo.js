import React from 'react';
import ListaDoacao from './ListaDoacao';
import Doar from './Doar';

class Conteudo extends React.Component {
  
    
    buscaConteudo(){
        let conteudo = null;

        switch(this.props.acao){
            case 'D':
                conteudo = this.getDoar();
                break;
            case 'R':
                conteudo = <p> Operação de Resgate ( Ainda não implementada )</p>;
                break;
            case 'S':
                conteudo = <p> Tela de Login ( Ainda não implementada )</p>;
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
       return <ListaDoacao />;
    }
    
    getDoar(){
        return (
            <div>
                <ListaDoacao />
                <Doar isOpen={true} user={this.props.user} />
            </div>
            
        )
    }
    render() { 
        return (
            this.buscaConteudo()
        )
    }

}

export default Conteudo;
