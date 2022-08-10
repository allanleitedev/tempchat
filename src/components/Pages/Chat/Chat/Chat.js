import {BiSend} from 'react-icons/bi'
import styled from 'styled-components';
import {Navigate} from 'react-router-dom'
import { useContext, useState, useEffect} from 'react';
import { useCollection} from 'react-firebase-hooks/firestore'
import { collection, limit, orderBy,query, serverTimestamp,doc, setDoc, addDoc} from 'firebase/firestore';
import { db } from '../../../../services/Firebaseconfig';
import Message from './Message';
import { AuthContext } from '../../../../context/Authtentication';
import Button from '../../../Button/Button';

const Chatbox = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;

    .view{
        background-color: #fff;
        height:50vh;
        width:50vw;
        border-radius:30px;
        overflow:auto;
        &::-webkit-scrollbar{
            display:none;
        }
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

    span a {
        margin-left:30px;
        text-decoration:none;
        color:#FF5757;
        font-size:1.5rem;
    }
`

function Chat({token}) {
    const [message, setMessage] = useState('')
    //const[queryMessages, setQueryMessages] = useState()
    const messageRef = collection(db,token)
    
    const{name} = useContext(AuthContext)

    const queryMessages = query(messageRef,orderBy("createdAt"))

    const [value, loading, error] = useCollection(queryMessages)

    useEffect(() => {
        if(!doc(db, token,"enter")){setDoc(doc(db, token,"enter"), {
            name:name,
            message:`${name} entrou no chat!`,
            createdAt:serverTimestamp()
        });}
        console.log(value)
        
    }, [])

    useEffect(()=>{
        const view = document.querySelector('.view')
        view.scrollTop = view.scrollHeight
    },[value])
    
   

    async function sendMessage(e){
        e.preventDefault()
        await addDoc(messageRef, {
            name:name,
            message:message,
            createdAt:serverTimestamp()
        });
        setMessage('')
    }
    return ( 
    <Chatbox>
        <span>ID do chat: {token}<a href="/">Sair</a></span>
        <div className='view'>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value &&
          <div>
            {value.docs.map((doc) => (
              <Message 
              message={doc.data().message}
              user={doc.data().name}
              />
            ))}
          </div>
        }
        </div>
        <form onSubmit={sendMessage}>
            <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={sendMessage}><BiSend/></button>
        </form>     
    </Chatbox>
    );
}

export default Chat;