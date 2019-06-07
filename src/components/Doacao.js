import React from 'react';


class Doacao extends React.Component {

    render() {

        const doacao = this.props.data;
        return (
            <li class="resume-item d-flex flex-column flex-md-row justify-content-between mb-3 doacao">
                <div class="resume-content">
                    <h3 class="mb-0">
                        <span class="doacao-usuario">
                            {doacao.nomeUsuarioOrigem}
                        </span>
                        <span class="doacao-valor">
                            {doacao.valorTransacao}
                        </span>
                    </h3>
                    <div class="subheading mb-3 doacao-destino">
                        {doacao.nomeUsuarioDestino} 
                    </div>
                    <p class="doacao-motivo" >
                        {doacao.motivo}
                    </p>
                </div>
                <div class="resume-date text-md-right">
                    <span class="text-primary">{doacao.dataTransacao}</span>
                </div>
            </li>

        );
    }

}

export default Doacao;
