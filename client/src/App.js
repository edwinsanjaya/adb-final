import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar';
import ActorList from './components/ActorList';
import ActorModal from './components/ActorModal';
import TinyMceEditor from './components/TinyMceEditor';
import ArticleDetailPage from './pages/ArticleDetailPage';
import LoginPage from './pages/LoginPage';
import store from './store'
import './App.css';
import { loadUser } from './actions/authActions';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <AppNavbar />
            <Container>
              <Routes>
                <Route exact path="/" element={<><div>This is home page</div></>} />
                <Route exact path="/actor-list" element={<><ActorModal /><ActorList /></>} />
                <Route exact path="/article/edit" element={<TinyMceEditor />} />
                <Route exact path="/article/:id" element={<ArticleDetailPage />} />
                <Route exact path="/ruangan-rahasia/login" element={<LoginPage />} />
              </Routes>
            </Container>
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
