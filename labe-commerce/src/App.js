import './App.css'
// import { Carrinho } from './Components/Carrinho/Carrinho'
// import { Filtros } from './Components/Filtros/Filtros'

import { Router } from './routes/Router'
import {Data} from'./Data/Data'
import { Home } from './Components/Home/Home'


function App() {
  return (
    <div className="App">
      {/* <Filtros/> */}
      <Router/>
      {/* <Carrinho/> */}
      {/* <Home data={Data}/> */}
    </div>
  )
}

export default App
