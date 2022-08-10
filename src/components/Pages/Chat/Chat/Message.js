import styled from "styled-components";
import { useContext} from 'react';
import { AuthContext } from '../../../../context/Authtentication';

let me = 'linear-gradient(30deg,#5DDC5B,#158C5B)'

let other = 'linear-gradient(30deg,#5B96DC,#1552DC)'



function Message({message,user}) {
    const{name} = useContext(AuthContext)
    const MsgBox = styled.div`
        display:flex;
        flex-direction:${user==name?'row-reverse':'row'};
        .msg-container{
            margin:20px;
            display:flex;
            flex-direction:column;
            align-items:${user==name?'end':'start'};
        }
        .user{
            color:#000;
            font-weight:600;
            opacity:0.7;
        }
        .msg{
            color:rgba(0,0,0,0.7);
            font-weight:700;
            background-image:${user==name?me:other};
            padding:15px;
            border-radius:30px;
            margin:10px 0px;
            text-align:start;
        }
    `
    return ( 
        <MsgBox>
            <div className="msg-container">
                <div className="user">{`${user} diz:`}</div>
                <div className="msg">{message}</div>
            </div>
            
        </MsgBox>
     );
}

export default Message;