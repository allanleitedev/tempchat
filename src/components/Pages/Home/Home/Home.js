import styled from 'styled-components'
import Button from '../../../Button/Button'
import {newChat} from '../../../../context/Chat'
import {useState} from 'react'
import {Navigate} from 'react-router-dom'

const App = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    height:80vh;
    margin:auto;
    justify-content:center;
    align-items:center;
    Button{
        margin-top:50px;
        margin-bottom:10px;
    }
    input{
        padding:10px;
        width:100%;
        border-radius:30px;
        border:none;
        text-align:center;
        font-size: 1.2rem;
        font-weight:700;
        color:#555;
        &:focus{
            outline:none;
        }
    }   
`

function Home() {

    const [chattoken, setChattoken] = useState(null)

    function initChat(){
        var token = newChat()
        setChattoken(token)
        sessionStorage.setItem("@Chat_token", token)
    }
    
    if(!chattoken){
        return (
            <App>
                    <Button
                    handle={initChat}
                    text='Novo Chat'
                    cor='linear-gradient(30deg,#5DDC5B,#158C5B)'
                    ></Button>
                    <Button
                    onclick=''
                    text='Entre em um chat'
                    cor='linear-gradient(30deg,#5B96DC,#1552DC)'
                    />
                    <input type='Text'></input>
            </App>
        )
    }

    return <Navigate to='/chat' replace/>
}

export default Home