import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getArticle } from '../actions/articleActions'

ArticleDetailPage.propTypes = {
  article: PropTypes.object.isRequired
};

function mapStateToProps(state){
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
      this is article {params.id}
      {JSON.stringify(props.article.content)}
    </div>
  );
}

export default connect(mapStateToProps)(ArticleDetailPage);