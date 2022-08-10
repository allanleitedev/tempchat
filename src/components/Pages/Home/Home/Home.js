import styled from 'styled-components'
import Button from '../../../Button/Button'
import {useState} from 'react'
import Chat from '../../Chat/Chat/Chat'

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
    const [inputtoken, setInputtoken] = useState(null)
    const [token, setToken] = useState(null)

    function initChat(token){

        if(token === null){
            const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const tamanho = 32

            var newToken =''
            for(var i=0;i<tamanho;i++){
            newToken += char[(Math.floor(Math.random() * char.length))]
            }
            setToken(newToken)
        }else{
            console.log(token)
            setToken(token)
        }
    }
    
    if(!token){
        return (
            <App>
                    <Button
                    handle={()=>initChat(null)}
                    text='Novo Chat'
                    cor='linear-gradient(30deg,#5DDC5B,#158C5B)'
                    ></Button>
                    <Button
                    handle={()=>initChat(inputtoken)}
                    text='Entre em um chat'
                    cor='linear-gradient(30deg,#5B96DC,#1552DC)'
                    />
                    <input type='Text' onChange={(e)=>setInputtoken(e.target.value)}></input>
            </App>
        )
    }

    return <Chat token={token}/>
}

export default Home