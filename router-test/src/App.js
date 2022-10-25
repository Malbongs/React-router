
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import RouterTest from './RouterTest';
import Product from './Product';
import Footer from './Footer';
function App() {
  return (
   <>
 
      <BrowserRouter>
      <Nav></Nav>
      <RouterTest>
      <Product></Product>
      </RouterTest>
      <Footer></Footer>
      </BrowserRouter>
   </>
  );
}

export default App;
