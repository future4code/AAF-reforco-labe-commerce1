import React, {useState} from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Carrinho from "../Components/Carrinho/Carrinho"
import { Home } from "../Components/Home/Home"



export const Router = ()=>{
    const [carrinho, setCarrinho] = useState([]);
    const valores =  {carrinho,setCarrinho} 
    const [valorTotal, setValorTotal] = useState(0);

//      adicionarValorTotal = (price) => {
//     setValorTotal({
//       valorTotal: valorTotal + price,
//     });
//   };

//   removerValorTotal = (price) => {
//    setValorTotal({
//       valorTotal: valorTotal - price,
//     });
//   };
    return(
<BrowserRouter>
<Routes>
    <Route  index element={<Home valores= {valores}/>}   />
    <Route  path='Carrinho' element={<Carrinho carrinho={carrinho} valorTotal={valorTotal}/>}   />
</Routes>
</BrowserRouter>




    )
}