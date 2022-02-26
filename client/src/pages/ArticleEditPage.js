import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getArticle, updateArticle } from '../actions/articleActions'
import TinyMceEditor from '../components/TinyMceEditor';
import { useState } from 'react';
import parse from 'html-react-parser';
import { TextField, Button } from '@mui/material';

ArticleEditPage.propTypes = {
  article: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    article: state.article
  }
}

function ArticleEditPage(props) {
  let params = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticle(params.id))
  }, [])
  

  const initialContent = props.article.article.content ?? ''
  const [newContent, setNewContent] = useState('')
  const [newTitle, setNewTitle] = useState('')
  useEffect(() => {
    setNewTitle(props.article.article.title)
  }, [props.article.article.title])

  function handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setNewTitle(value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    const article = {
      title: newTitle,
      content: newContent
    }
    dispatch(updateArticle(params.id, article))
  }

  function handleEditorChange(content, editor) {
    setNewContent(content.replace(/>\s</g, "><"))
  }

  return (
    <div>
      Article ID: {params.id}
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="title"
          name="title"
          label="Title"
          value={newTitle}
          onChange={handleChange}
        />
        <TinyMceEditor initialValue={initialContent} onEditorChange={handleEditorChange} />
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      {/* <TinyMceEditor initialValue={initialContent} onEditorChange={handleEditorChange} />
      <Button onClick={submitArticleChanges}>Submit Edit</Button> */}
      <div>
        <div>
          Preview:
        </div>
        <div>
          {parse(newContent ? newContent : initialContent)}
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ArticleEditPage);