import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getArticle } from '../actions/articleActions'
import parse from 'html-react-parser'

import './ArticleDetailPage.scss';

ArticleDetailPage.propTypes = {
  article: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    article: state.article
  }
}

function ArticleDetailPage(props) {
  let params = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticle(params.id))
  }, [])
  return (
    <div>
      <div>
        ID: {JSON.stringify(props.article.article.id)}. {JSON.stringify(props.article.article.title)}
      </div>
      <div className="title">{props.article.article.title}</div>
      <div>
        {parse(props.article.article.content ? props.article.article.content : '')}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ArticleDetailPage);