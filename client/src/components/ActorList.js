import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getActors, addActor, deleteActor } from '../actions/actorActions'
import PropTypes from 'prop-types'

class ActorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.deleteActor = this.deleteActor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getActors();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  deleteActor(id) {
    this.props.deleteActor(id);
  }

  render() {
    return (
      <div>
        <ListGroup>
          <TransitionGroup className="actor-list">
            {this.props.actor.actors.map(({ actor_id, firstName, lastName }) => (
              <CSSTransition key={actor_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.deleteActor.bind(this, actor_id)}
                  >
                    &times;
                  </Button>
                  {actor_id} {firstName} {lastName}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </div>
    )
  }
}

// action in redux will be stored as a prop in here
ActorList.propTypes = {
  getActors: PropTypes.func.isRequired,
  actor: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  //should be similar with reducer in reducers.index.js
  actor: state.actor
});

export default connect(mapStateToProps, { getActors, addActor, deleteActor })(ActorList);