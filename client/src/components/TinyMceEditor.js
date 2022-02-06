import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { useParams } from 'react-router-dom';

function mapStateToProps(state) {
  return {

  };
}

function TinyMceEditor(props) {
  const defaultInitialContent = '<p>This is the initial content of the editor :)</p>'
  let [newContent, setNewContent] = useState(defaultInitialContent ?? '')

  function defaultHandleEditorChange(content, editor) {
    setNewContent(content)
  }

  return (
    <div>
      <div>
        <Editor
          // onInit={(evt, editor) => editorRef.current = editor}
          id='tiny-mce'
          apiKey='gflp21xepbo8ji0j8j348wbz4xw6uvhuycqkzgy2y4ab6jz6'
          initialValue={props.initialValue ? props.initialValue : defaultInitialContent}
          onEditorChange={props.onEditorChange ? props.onEditorChange : defaultHandleEditorChange}
          init={{
            height: 500,
            menubar: true,
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
        <div>
          {props.defaultViewer && <div>{newContent}</div>}
        </div>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
)(TinyMceEditor);