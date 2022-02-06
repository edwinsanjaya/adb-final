import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, Box } from '@mui/material'
import ArticleListPage from './ArticleListPage';
import ArticleCreatePage from './ArticleCreatePage';

function mapStateToProps(state) {
  return {

  };
}

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'list'
    }
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(event, value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <div>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleTabChange}
          >
            <Tab label="list" value="list" />
            <Tab label="create" value="create" />
          </Tabs>
        </Box>
        {this.state.value === 'list' && <ArticleListPage/>}
        {this.state.value === 'create' && <ArticleCreatePage/>}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ArticlePage);