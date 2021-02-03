import { NavBar } from './components/Navbar';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/GlobalStyles';
import { Router } from '@reach/router';
import { Conocenos } from './pages/Conocenos';
import { Contenido } from './pages/Contenido';
import './App.css';
import { Contactanos } from './pages/Contactanos';
import { FooterSection as Footer } from './components/Footer';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      <Router>
        <div exact path='/' style={{paddingTop: '110px'}}>
          <NotFound default />
          <Home exact path='/' />
          <Conocenos exact path='conocenos' />
          <Contenido exact path='contenido' />
          <Contactanos exact path='contactanos' />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
