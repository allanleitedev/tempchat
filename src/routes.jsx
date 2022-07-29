
import {BrowserRouter, Routes, Route, Navigate }from 'react-router-dom'
import Login from './components/Pages/Login/Login/Login'
import Register from './components/Pages/Register/Register/Register'
import Home from './components/Pages/Home/Home/Home'
import Chat from './components/Pages/Chat/Chat/Chat'
import { AuthContext } from './context/Authtentication'
import { useContext } from 'react'

function Rotas() {
    const {signed} = useContext(AuthContext)
    const ProtectedRoute = ({user,children}) =>{
        console.log(user)
        if(!user){
            return <Navigate to="/" replace/>
        }
    
        return children
    }  
    return ( <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/home' element={
                    <ProtectedRoute user={signed}>
                        <Home/>
                    </ProtectedRoute>}
                />
                <Route path='/chat' element={
                    <ProtectedRoute user={signed}>
                        <Chat/>
                    </ProtectedRoute>}
                />     
            </Routes>
        </BrowserRouter>
    </> )
}

export default Rotas