import React, {useState} from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Carrinho from "../Components/Carrinho/Carrinho"
import { Home } from "../Components/Home/Home"



export const Router = ()=>{
    const [carrinho, setCarrinho] = useState([]);
    const valores =  {carrinho,setCarrinho} 
    return(
<BrowserRouter>
<Routes>
    <Route  index element={<Home valores= {valores}/>}   />
    <Route  path='Carrinho' element={<Carrinho carrinho={carrinho}/>}   />
</Routes>
</BrowserRouter>




    )
}