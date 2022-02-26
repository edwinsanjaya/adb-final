import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar';
import ActorList from './components/ActorList';
import ActorModal from './components/ActorModal';
import TinyMceEditor from './components/TinyMceEditor';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleEditPage from './pages/ArticleEditPage';
import LoginPage from './pages/LoginPage';

import './App.scss';
import { loadUser } from './actions/authActions';
import ArticlePage from './pages/ArticlePage';
import AboutUsPage from './pages/AboutUsPage';

import { ThemeProvider, createTheme } from "@mui/material";

const THEME = createTheme({
  typography: {
    "fontFamily": "Zen Kaku Gothic New",
    "fontSize": 14,
    "fontWeightLight": 400,
    "fontWeightRegular": 500,
    "fontWeightMedium": 700
  }
});

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <AppNavbar />
              <Container>
                <Routes>
                  <Route exact path="/" element={<><div>This is home page</div></>} />
                  <Route exact path="/actor-list" element={<><ActorModal /><ActorList /></>} />
                  <Route exact path="/article" element={<ArticlePage />} />
                  <Route exact path="/article/create" element={<TinyMceEditor defaultViewer />} />
                  <Route exact path="/article/:id/detail" element={<ArticleDetailPage />} />
                  <Route exact path="/article/:id/edit" element={<ArticleEditPage />} />
                  <Route exact path="/about" element={<AboutUsPage />} />
                  <Route exact path="/ruangan-rahasia/login" element={<LoginPage />} />
                </Routes>
              </Container>
            </div>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
