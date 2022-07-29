import {BiSend} from 'react-icons/bi'
import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import {newMessage,receiveMessage} from '../../../../context/Chat'
import {AuthContext} from '../../../../context/Authtentication'
import { serverTimestamp } from 'firebase/database';

const Chatbox = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;

    .view{
        background-color: #fff;
        height:50vh;
        width:50vw;
        border-radius:30px;
    }
    input{
        width:40vw;
        margin:20px;
        padding:20px;
        border-radius:30px;
        border:none;
        font-size:1.3rem;
        color:#555;
        &:focus{
            outline:none;
        }
    }
    button{
        background:transparent;
        border:none;
        font-size:3rem;
        color:#FF5757;
        align-items:center;
        padding-top:5px;
        transition:0.3s;
        &:hover{
            color:#5DDC5B;
            cursor:pointer;
        }
    }
    span{
        color:#555;
        font-weight:700;
        margin-bottom:20px;
    }
`

function Chat() {
    const [token, setToken] = useState(sessionStorage.getItem("@Chat_token"))
    const [message, setMessage] = useState(null)
    const {name} = useContext(AuthContext)

    useEffect(() => {
       var messages = receiveMessage(token)
       console.log(messages)
    }, [])
    

    function sendMessage(){
        newMessage(name,message,token)
        console.log(name+" - "+message+" - "+token + ' - ' + serverTimestamp)
    }
    return ( 
    <Chatbox>
        <span>ID do chat: {token}</span>
        <div className='view'></div>
        <div className='send'>
            <input type='text' onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={sendMessage}><BiSend/></button>
        </div>     
    </Chatbox>
    );
}

export default Chat;