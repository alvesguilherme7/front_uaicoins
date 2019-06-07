import React from 'react';
import Conteudo from './Conteudo';
import axios from 'axios';
import Servidor from '../constantes/Servidor';
import NavUsuario from './NavUsuario';
import NavAdmin from './NavAdmin'

class VisaoGeral extends React.Component {
    state = {
        user: 10,
        tipoUser: 1,
        acao: null,
        valorDoacao: null,
        valorRetirada: null

    }

    //capturar clique na nav
    handleClick = (acao) => {
        this.setState({ acao: acao });
    }

    //obter nav para o tipo de usuário
    getNav() {
        if (this.state.tipoUser === 0)
            return(
                <NavAdmin 
                    setStateVisaoGeral={ this.handleClick }
                />
            ) 

        return(
            <NavUsuario 
                setStateVisaoGeral={ this.handleClick }
                valorDoacao={ this.state.valorDoacao }
                valorRetirada={ this.state.valorRetirada }
            />
        ) 
    }

    // buscar dados do usuario logado
    getDadosUser() {
        axios.get(`${Servidor.link}/usuarios/${this.state.user}/coins`)
            .then(res => {
                const valorDoacao = res.data[0].valorDoacao;
                const valorRetirada = res.data[0].valorRetirada;

                this.setState({ "valorDoacao": valorDoacao, "valorRetirada": valorRetirada });

            })
    }

    componentDidMount() {
        this.getDadosUser();
    }

    render() {

        const { acao, user, valorDoacao, valorRetirada } = this.state;

        return (
            <div className="App">

                <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <span class="navbar-brand js-scroll-trigger link" onClick={() => this.handleClick('')} >
                        uaicoins
                    </span>
                    {this.getNav()}
                </nav>

                <section class="resume-section p-3 p-lg-5 d-flex " id="experience">
                    <Conteudo
                        acao={ acao }
                        user={ user }
                        valorDoacao={ valorDoacao }
                        valorRetirada={ valorRetirada }
                    />
                </section>

            </div>
        );
    }

}

export default VisaoGeral;
