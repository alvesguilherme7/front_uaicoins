import React from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Servidor from '../constantes/Servidor'

class Depositar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.isOpen,
      erro: null
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // envia deposito
  postDeposito() {

  }

  render() {

    const options = this.state.options;

    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Depósito para Colaboradores</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="valorDoado">Valor a ser depositado:</Label>
                <Input type="number" name="valorDoado" id="valorDoado" placeholder="$ 0.00" required />
              </FormGroup>

              <FormGroup>
                <Label id="feedbackError">{this.state.erro}</Label>
              </FormGroup>

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => { this.postDoacao() }}>Confirmar</Button>
            {' '}
            <Button color="secondary" onClick={() => this.setState({ modal: false })}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}

export default Depositar;

