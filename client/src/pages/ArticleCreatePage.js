import React, { Component } from 'react';
import { connect } from 'react-redux';
import TinyMceEditor from '../components/TinyMceEditor';
import { TextField, Button } from '@mui/material'
import { addArticle } from '../actions/articleActions'


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class ArticleCreatePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditorChange = this.handleEditorChange.bind(this)
  }

  
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleEditorChange(content, editor){
    this.setState({content: content.replace(/>\s</g, "><")})
  }

  handleSubmit(event) {
    event.preventDefault()
    const article = {
      title: this.state.title,
      content: this.state.content
    }
    this.props.addArticle(article)
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {JSON.stringify(this.state)}
          </div>

        </div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <TinyMceEditor onEditorChange={this.handleEditorChange}/>
          <Button type="submit" variant="contained">Submit</Button>
        </form>

      </div>
    );
  }
}

export default connect(
  mapStateToProps, {addArticle}
)(ArticleCreatePage);