import {Container} from "react-bootstrap"; 
import {BrowserRouter, Route} from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <main className="py-3">
      <Container>
        <Route path='/' component={HomeScreen} />
      </Container>
    
    </main>
    <Footer/>
     
     
   
    </BrowserRouter>
  );
}

export default App;
