import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const isAuthenticated = this.props.auth.isAuthenticated
    return (
      <div>
        {isAuthenticated && <Container>{'Logged in as ' + this.props.auth.user.username}</Container>}
        <Navbar color="dark" dark expand="sm" container>
          <NavbarBrand href="/">Jellyfish Gaming</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/actor-list">
                  Actor
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/article">
                  Article
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  About Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(AppNavbar);