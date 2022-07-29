import styled from "styled-components"
import Button from "../../../Button/Button.js"
import {Link,Navigate} from 'react-router-dom'
import { useContext, useState } from "react"
import { AuthContext } from "../../../../context/Authtentication.js"

const Signbox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:30px 0px;
    background-color:#fff;
    border-radius:30px;
    margin: 50px auto;
    width:400px;
    h1{
        color:#555;
    }
    label{
        text-align:start;
        margin-bottom:50px;
        color:#555;
        font-size:1.2rem;
    }
    input{
        border:none;
        width:100%;
        border-bottom: 1px solid #FF5757;
        padding:10px;
        transition: 0.3s;
        &:focus{
            outline:none;
            border-bottom: 1px solid #5DDC5B;
        }
    }
    a{
            text-decoration:none;
            opacity:0.7;
            margin-bottom: 50px;
            transition:0.3s;
            &:hover{
                opacity:1;
            }
            
    }
    span{
        margin-top:50px;
    }
    @media ( max-width: 450px ) {
        height:100%;
        width:100%;
        margin:0px;
        border-radius:0px;
    }
`

function Login(){
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const {createMail,signed} = useContext(AuthContext)

    if(!signed){
        return (
                <Signbox>
                    <h1>Cadastro</h1>
                    <label>Email:<input value={user} onChange={(e)=>setUser(e.target.value)} type='email'name='user' id="user" placeholder="Digite seu email."></input></label>
                    <label>Senha:<input value={pass} onChange={(e)=>setPass(e.target.value)} type='password' name='password' id="password" placeholder="Digite sua senha"></input></label>
                    <Button
                    text="Cadastrar"
                    cor='linear-gradient(30deg,#5B96DC,#5DDC5B)'
                    handle={()=>createMail(user,pass)}
                    />
                    <span>Já possui conta? <Link to='/'>Entrar!</Link></span>
                </Signbox>
        )
    }
    return <Navigate to='/home' replace />
}

export default Login