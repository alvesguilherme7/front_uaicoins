import React from 'react';
import Conteudo from './Conteudo';
import axios from 'axios'

class VisaoGeral extends React.Component {
    state = {
        user: 10,
        acao: null,
        valorDoacao: null,
        valorRetirada: null
    }

    handleClick(acao) {
        this.setState({ acao: acao });
    }

    componentDidMount() {
        axios.get(`https://virtserver.swaggerhub.com/breno5/UaiCoins2/1.0.0/usuarios/${ this.state.user }/coins`)
            .then(res => {
                const valorDoacao = res.data[0].valorDoacao;
                const valorRetirada = res.data[0].valorRetirada;
                
                this.setState({ "valorDoacao" : valorDoacao, "valorRetirada": valorRetirada });
                
            })
    }

    render() {
        
        const { valorDoacao, valorRetirada  } = this.state;

        return (
            <div className="App">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <span class="navbar-brand js-scroll-trigger link" onClick={() => this.handleClick('')} >
                        uaicoins
                    </span>
                    <span class="navbar-brand js-scroll-trigger">
                        <span class="d-block d-lg-none">
                            Carlos Drumont
                        </span>
                        <span class="d-none d-lg-block">
                            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
                            
                            <span class="d-block item-nav">Carlos Drummond</span>
                            
                            <span class="d-block item-nav"> Saldo para Doação <saldo> R$ { valorDoacao }</saldo> </span>
                            
                            <span class="d-block item-nav"> Saldo para Regaste <saldo> R$ { valorRetirada }</saldo></span>
                            
                        </span>
                    </span>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <span class="nav-link js-scroll-trigger" onClick={() => this.handleClick('D')} >Fazer Doação</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link js-scroll-trigger" onClick={() => this.handleClick('R')} >Retirar Dinheiro</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link js-scroll-trigger" onClick={() => this.handleClick('S')} >Sair</span>
                            </li>
                        </ul>
                    </div>
                </nav>


                <section class="resume-section p-3 p-lg-5 d-flex " id="experience">
                    <Conteudo acao={this.state.acao} user={ this.state.user }/>
                </section>

            </div>
        );
    }

}

export default VisaoGeral;
