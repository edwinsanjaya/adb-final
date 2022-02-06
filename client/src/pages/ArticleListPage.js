import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getArticles } from '../actions/articleActions';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button
} from '@mui/material';
import { EditRounded, Visibility } from '@mui/icons-material'

function mapStateToProps(state) {
  return {
    article: state.article
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class ArticleListPage extends Component {

  componentDidMount() {
    this.props.getArticles()
  }

  render() {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sc={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Article ID</TableCell>
                <TableCell>Article Title</TableCell>
                <TableCell>Created/Updated</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.props.article.articles.map((article) =>
                  <TableRow
                    key={article.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{article.id}</TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>{(article.createdAt).substring(0, 10)}/{(article.updatedAt).substring(0, 10)}</TableCell>
                    <TableCell>
                      <Link to={"/article/" + article.id + "/detail"}>
                        <Button variant="contained" startIcon={<Visibility />}> View </Button>
                      </Link>
                      <Link to={"/article/" + article.id + "/edit"}>
                        <Button variant="contained" startIcon={<EditRounded />}> Edit </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, { getArticles }
)(ArticleListPage);