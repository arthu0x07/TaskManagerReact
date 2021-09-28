import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background:#000000;
    border-bottom: 6px solid green;
`
export const Menu = styled.div`
    width:50%;
    height: 70px;
    display: flex;
    align-items: center;
    
    a{
        font-size: 20px;
        color: whitesmoke; 
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;
    }
    a:hover{
        color: green;
    }
`