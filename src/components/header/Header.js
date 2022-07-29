import { useContext} from "react";
import {ImExit} from 'react-icons/im'
import styled from "styled-components"
import logoimg from "../../assets/images/logo.png"
import { AuthContext } from "../../context/Authtentication";

const Menu = styled.div`
    background-color: #FF5757;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 50px;
    img{
        max-height: 30px;
        transition:0.3s;
        &:hover{
            filter:drop-shadow(0px 0px 3px rgba(256,256,256, 0.5) );
            transform:scale(1.2);
            cursor:pointer;
        }
    }
    span{
        color:#fff;
        font-size:1.3rem;
        font-weight:600;
        display:flex;
    }
    button{
        display:flex;
        align-items:center;
        background:transparent;
        border:none;
        margin:0px 30px;
        color:#FFF;
        font-size:1.3rem;
        &:hover{
            cursor:pointer;
            filter:drop-shadow(0px 0px 2px #FFF)
        }
    }
`;

function Header(){
    const {signed,name,logOut} = useContext(AuthContext)

    if(!signed){
        return(
            <Menu>
                <a><img src={logoimg} href="#"/></a>
            </Menu>
        )
    }
    else{
        return(
            <Menu>  
                <a href="/">
                    <img src={logoimg}/>
                </a>
                <span>Olá, {name.replaceAll('"','')} <button onClick={()=>logOut()}><ImExit/>Sair</button></span>
            </Menu>
        )
    }
}

export default Header;