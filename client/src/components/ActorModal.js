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
import { addActor, toggleModal, updateActor } from '../actions/actorActions'

class ActorModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: props.actor.modal.firstName,
      lastName: props.actor.modal.lastName,
      open: props.actor.modal.open
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addActor = this.addActor.bind(this)
    this.updateActor = this.updateActor.bind(this)
  }

  toggleModal() {
    this.props.toggleModal({
      actorId: null,
      firstName: '',
      lastName: ''
    })
  }

  static getDerivedStateFromProps(props, state) {
    if (props.actor.modal.open !== state.open) {
      return {
        firstName: props.actor.modal.firstName,
        lastName: props.actor.modal.lastName,
        open: props.actor.modal.open
      }
    }
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
      actorId: this.props.actor.actorId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    }
    if (!actor.actorId) {
      this.addActor(actor)
    } else {
      this.updateActor(actor)
    }
    this.toggleModal()
  }

  addActor(actor) {
    this.props.addActor(actor)
  }

  updateActor(actor) {
    this.props.updateActor(actor)
  }

  generateActionText() {
    if (!!this.props.actor.actorId) {
      return 'Update Actor'
    } else {
      return 'Add Actor'
    }
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
          isOpen={!!this.props.actor.modal.open}
          toggle={this.toggleModal}
        >
          <ModalHeader toggle={this.toggleModal}>{this.generateActionText()}</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit} inline>
              <FormGroup floating>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Add your first name..."
                  value={this.state.firstName}
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
                  value={this.state.lastName}
                  onChange={this.handleChange}
                >
                </Input>
                <Label for="lastName">Lastname</Label>
              </FormGroup>
              {' '}
              <Button>
                {this.generateActionText()}
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

export default connect(mapStateToProps, { addActor, toggleModal, updateActor })(ActorModal)