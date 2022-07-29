import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';
import Rotas from './routes.jsx';
import { AuthProvider } from './context/Authtentication';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    min-height:100vh;
`
function App() {
  return (
    <AuthProvider>
      <Container className="App">
        <Header/>
        <Rotas/>
        <Footer/>
      </Container>
    </AuthProvider>
    
  );
}

export default App;
