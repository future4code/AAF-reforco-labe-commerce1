import './App.css'
// import { Carrinho } from './Components/Carrinho/Carrinho'
// import { Filtros } from './Components/Filtros/Filtros'
// import { Home } from './Components/Home/Home'
import { Router } from './routes/Router'

function App() {
  return (
    <div className="App">
      {/* <Filtros/> */}
      <Router/>
      {/* <Carrinho/> */}
    </div>
  )
}

export default App
