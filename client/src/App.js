import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import { Provider } from 'react-redux'
import AppNavbar from './components/AppNavbar';
import ActorList from './components/ActorList';
import ActorModal from './components/ActorModal';
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
        </Container>
      </div>
    </Provider>
  );
}

export default App;
