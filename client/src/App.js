import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar';
import ActorList from './components/ActorList';
import ActorModal from './components/ActorModal';
import TinyMceEditor from './components/TinyMceEditor';
import ArticleDetailPage from './pages/ArticleDetailPage';
import store from './store'
import './App.css';

function App() {
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
              <Route exact path="/article/:id" element={<ArticleDetailPage/>} />
              <Route exact path="/ruangan-rahasia/login" element={<>This is login page</>} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
