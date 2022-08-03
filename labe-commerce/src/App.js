
import './App.css';
import { Carrinho } from './Components/Carrinho/Carrinho';
import {Filtros} from './Components/Filtros/Filtros';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <div className='App'>
    <Filtros/>
    <Home/>
    <Carrinho/>
    </div>
  );
}

export default App;
