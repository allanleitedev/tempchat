import {SiReact,SiStyledcomponents,SiFirebase} from 'react-icons/si'
import styled from 'styled-components'

const Ft = styled.footer`
    opacity:0.6;
    border-top: 1px solid #fff;
    display:flex;
    align-items: center;
    justify-content:center;
    color:#555;
    font-size:1.2rem;
    a{
        text-decoration: none;
        color:inherit;
    }
    svg{
        font-size:2rem;
        margin: 0px 20px;
    }
    .styled-components{
        font-size:4rem;
    }
    div{
        display:flex;
        align-items: center;
    }

    @media ( max-width: 450px ) {
        flex-direction:column;
        svg{
            font-size:2.5rem;
        }
        .styled-components{
        font-size:4.5rem;
    }
    }
`

function Footer(){

    return (<>
        <Ft>
            <p>created by<a href="https://github.com/allanleitedev"> Allan Leite </a>with:</p>
            <div>
            <SiReact/>
            <SiStyledcomponents className='styled-components'/>
            <SiFirebase/>
            </div>
        </Ft>
    </>)

}

export default Footer