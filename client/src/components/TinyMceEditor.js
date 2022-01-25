import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';

function mapStateToProps(state) {
  return {

  };
}

class TinyMceEditor extends Component {
  constructor(props){
    super(props)
    this.state = {
      initialCode: '<p>This is the initial content of the editor :)</p>',
      code: ''
    }
    this.handleEditorChange = this.handleEditorChange.bind(this)
  }

  componentDidMount(){
    this.setState({code: this.state.initialCode})
  }

  handleEditorChange(content, editor){
    this.setState({code: content.replace(/>\s</g, "><")});
  }

  render() {
    return (
      <div>
        <div>{process.env.NODE_ENV}</div>
        <div>
          <Editor
            // onInit={(evt, editor) => editorRef.current = editor}
            id='tiny-mce'
            apiKey='gflp21xepbo8ji0j8j348wbz4xw6uvhuycqkzgy2y4ab6jz6'
            initialValue={this.state.initialCode}
            onEditorChange={this.handleEditorChange}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | code | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
          <button>Set Content</button>
          <div>
            <div>Content:</div>
            <div>{this.state.code}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(TinyMceEditor);