import { NavBar } from './components/Navbar';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/GlobalStyles';
import { Router } from '@reach/router';
import { Conocenos } from './pages/Conocenos';
import { Contenido } from './pages/Contenido';
import './App.css';
import { Contactanos } from './pages/Contactanos';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      <Router>
        <Home path='/' />
        <Conocenos path='/conocenos' />
        <Contenido path='/contenido' />
        <Contactanos path='/contactanos' />
      </Router>
    </div>
  );
}

export default App;
