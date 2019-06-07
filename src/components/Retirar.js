import React from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Servidor from '../constantes/Servidor'

class Retirar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: props.isOpen,
            valorRetirada: props.valorRetirada,
            erro: null
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    // envia retirada
    postRetirada() {
        const valorRetirada = document.getElementById('valorRetirada').value !== null ? document.getElementById('valorRetirada').value : null;
        axios.put(
            `${Servidor.link}/usuarios/${1}/coins`,
            {
              valor: valorRetirada
            }
          ).then(response => {
            if (response.status === 200)
                this.setState({ modal: false, valorRetirada: response.data.saldoAtual });
            else {
              const erro = 'Não foi possível realizar a retirada.';
              this.setState({ erro: erro });
            }
      
          });

    }

    render() {

        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Retirar Coins</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="valorRetirada">Você tem ${ this.props.valorRetirada } para retirada </Label>
                            </FormGroup>

                            <FormGroup>
                                <Label for="valorRetirada">Digite o valor de retirada</Label>
                                <Input type="number" name="valorRetirada" id="valorRetirada" placeholder="$ 0.00" required />
                            </FormGroup>

                            <FormGroup>
                                <Label id="feedbackError">{this.state.erro}</Label>
                            </FormGroup>

                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => { this.postRetirada() }}>Confirmar</Button>
                        {' '}
                        <Button color="secondary" onClick={() => this.setState({ modal: false })}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}

export default Retirar;

