import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'
import { login } from '../actions/authActions'

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const uname = this.state.username
    const pw = this.state.password
    const user = {uname, pw}
    console.log(user)
    this.props.login(user)
  }

  render() {
    return (
      <div>
        <Form inline>
          <FormGroup floating>
            <Input
              id="exampleUsername"
              name="username"
              placeholder="Username"
              type="text"
              onChange={this.handleChange}
            />
            <Label for="exampleUsername">
              Username
            </Label>
          </FormGroup>
          {' '}
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.handleChange}
            />
            <Label for="examplePassword">
              Password
            </Label>
          </FormGroup>
          {' '}
          <Button onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {login}
)(LoginPage);