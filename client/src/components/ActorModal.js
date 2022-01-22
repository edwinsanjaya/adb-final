import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { connect } from 'react-redux';
import { addActor } from '../actions/actorActions'

class ActorModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      firstName: '',
      lastName: '',
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addActor = this.addActor.bind(this)
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
      firstName: '',
      lastName: '',
    })
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const actor = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    }
    this.addActor(actor)
    this.toggleModal()
  }

  addActor(actor) {
    this.props.addActor(actor)
  }

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginButton: '2rem' }}
          onClick={this.toggleModal}
        >
          Add Item
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
        >
          <ModalHeader toggle={this.toggleModal}>Add Actor</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit} inline>
              <FormGroup floating>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Add your first name..."
                  onChange={this.handleChange}
                >
                </Input>
                <Label for="firstName">Firstname</Label>
              </FormGroup>
              {' '}
              <FormGroup floating>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Add your last name..."
                  onChange={this.handleChange}
                >
                </Input>
                <Label for="lastName">Lastname</Label>
              </FormGroup>
              {' '}
              <Button>
                Add Actor
              </Button>
            </Form>
          </ModalBody>

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  actor: state.actor
});

export default connect(mapStateToProps, { addActor })(ActorModal)