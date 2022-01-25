import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import { Provider } from 'react-redux'
import AppNavbar from './components/AppNavbar';
import ActorList from './components/ActorList';
import ActorModal from './components/ActorModal';
import TinyMceEditor from './components/TinyMceEditor';
import store from './store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ActorModal />
          <ActorList />
          <TinyMceEditor />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
