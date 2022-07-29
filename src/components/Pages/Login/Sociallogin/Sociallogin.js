import styled from "styled-components"
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import { useContext } from "react"
import { AuthContext } from "../../../../context/Authtentication"

const Social = styled.div`
    color:#555;
    margin:20px;
    display:flex;
    align-items:center;
    button{
        background:transparent;
        border:none;
        transition:0.3s;
        display:flex;
        align-items:center;
        &:hover{
            opacity:0.6;
            cursor:pointer;
        }
    }
    svg{
        font-size:2.5rem;
    }

`

function Sociallogin(){
    const {signInGoogle} = useContext(AuthContext)
    return(<>
        <Social>
            <p>entre com:</p>
            <button onClick={()=>signInGoogle()}><FcGoogle/></button>
            <AiFillGithub/>
        </Social>  
    </>)
}

export default Sociallogin