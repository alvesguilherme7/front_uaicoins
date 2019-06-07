import React from 'react';
import AppConstants from '../constantes/AppConstants';

function NavUsuario(props) {
    return (

        <div>
            <span class="navbar-brand js-scroll-trigger">
                <span class="d-block d-lg-none">
                    Carlos Drumont
                        </span>
                <span class="d-none d-lg-block">
                    <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />

                    <span class="d-block item-nav">Carlos Drummond</span>

                    <span class="d-block item-nav"> Saldo para Doação <saldo> R$ {props.valorDoacao}</saldo> </span>

                    <span class="d-block item-nav"> Saldo para Regaste <saldo> R$ {props.valorRetirada}</saldo></span>

                </span>
                
            </span> 

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <span class="nav-link js-scroll-trigger" onClick={() => props.setStateVisaoGeral(AppConstants.ACAO_DOAR)} >Fazer Doação</span>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link js-scroll-trigger" onClick={() => props.setStateVisaoGeral(AppConstants.ACAO_RETIRAR)} >Retirar Dinheiro</span>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link js-scroll-trigger" onClick={() => props.setStateVisaoGeral(AppConstants.ACAO_SAIR)} >Sair</span>
                    </li>
                </ul>
            </div>
        </div>
    );

}


export default NavUsuario;
