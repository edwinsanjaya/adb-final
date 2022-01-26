import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

ArticleDetailPage.propTypes = {
  
};

function ArticleDetailPage(props) {
  let params = useParams();
  return (
    <div>
      this is article {params.id}
    </div>
  );
}

export default ArticleDetailPage;