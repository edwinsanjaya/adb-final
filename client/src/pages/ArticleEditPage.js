import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getArticle, updateArticle } from '../actions/articleActions'
import TinyMceEditor from '../components/TinyMceEditor';
import { useState } from 'react';
import { Button } from 'reactstrap';

ArticleEditPage.propTypes = {
  article : PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    article : state.article
  }
}

function ArticleEditPage(props) {
  let params = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticle(params.id))
  }, [])

  const initialContent = props.article.article.content
  const [newContent, setNewContent] = useState('')
  
  function handleEditorchange(content, editor){
    setNewContent(content.replace(/>\s</g, "><"))
  }

  function submitArticleChanges(){
    dispatch(updateArticle(params.id, newContent))
  }

  return (
    <div>
      Article ID: {params.id}. Title: {props.article.article.title}
      <TinyMceEditor initialValue={initialContent} onEditorChange={handleEditorchange}/>
      <Button onClick={submitArticleChanges}>Submit Edit</Button>
      <div>
        Preview
        {newContent ? newContent : initialContent}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ArticleEditPage);