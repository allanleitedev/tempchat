import styled from "styled-components"

const primary = 'linear-gradient(30deg,#5B96DC,#5DDC5B)'
const secondary = 'linear-gradient(30deg,#5B96DC,#5DDC5B)'

function Button({text,handle,cor}){
    const Btn = styled.button`
    border:1px solid #5DDC5B;
    padding:10px;
    width: 60%;
    border-radius:30px;
    background-image:${cor};
    font-size:1.2rem;
    font-weight:500;
    color: #fff;
    transition:0.3s;
    &:hover{
        box-shadow:0px 5px 10px #5DDC5B;
        cursor:pointer;
        border:1px solid #fff;
    }
`
    return (<>
        <Btn onClick={handle}>{text}</Btn>
    </>)
}

export default Button