import React from 'react'
import Select from 'react-select'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class Doar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.isOpen,
      users: [],
      userDestino: null,
      options: [],
      erro: null
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getUsuarios();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // retorna todos os usuários
  getUsuarios() {
    axios.get(`https://virtserver.swaggerhub.com/breno5/UaiCoins2/1.0.0/usuarios`)
      .then(response => {
        const users = response.data;
        let options = [];
        let i = 0;
        // mapear usuarios em options
        users.map(
          // eslint-disable-next-line
          user => {
            options[i] = { value: user.id, label: user.nomeUsuario };
            i++;
          }
        )

        this.setState({ options });
      });
  }

  // envia doacao
  postDoacao() {

    const user = this.props.user !== null ? this.props.user : null;
    const selectedOption = this.state.selectedOption;
    const valorTransacao = document.getElementById('valorDoado').value !== null ? document.getElementById('valorDoado').value : null;
    const motivo = document.getElementById('motivoDoacao').value !== null ? document.getElementById('motivoDoacao').value : null;

    
    if (!valorTransacao) {
      this.setState({ erro: 'Preencha o valor a ser doado' });
      return;
    }

    
    if (!selectedOption) {
      this.setState({ erro: 'Preencha o usuário destino' });
      return;
    } 

    if (!motivo) {
      this.setState({ erro: 'Preencha o motivo ' });
      return;
    }

    axios.post(
      `https://virtserver.swaggerhub.com/breno5/UaiCoins2/1.0.0/transacoes`,
      {
        idUsuarioOrigem: user,
        idUsuarioDestino: selectedOption.value,
        valorTransacao: valorTransacao,
        motivo: motivo
      }
    ).then(response => {
      if (response.status === 201)
        this.setState({ modal: false });
      else {
        const erro = 'Não foi possível realizar a doação.';//response.data.erro
        this.setState({ erro: erro });
      }

    });


  }

  render() {

    const options = this.state.options;

    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Realizar doação</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="valorDoado">Valor a ser doado:</Label>
                <Input type="number" name="valorDoado" id="valorDoado" placeholder="$ 0.00" required />
              </FormGroup>

              <FormGroup>
                <Label for="usuarioDestinatario">Usuário destinatário: </Label>
                <Select options={options} onChange={selectedOption => this.setState({ selectedOption })} id="usuarioDestinatario" placeholder="digite o nome do usuário destino " required />
              </FormGroup>

              <FormGroup>
                <Label for="motivoDoacao">Motivo da doação: </Label>
                <Input type="textarea" name="motivoDoacao" id="motivoDoacao" required />
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

export default Doar;

