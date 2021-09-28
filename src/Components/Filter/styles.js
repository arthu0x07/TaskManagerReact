import styled from "styled-components";

export const Container = styled.div`
    width: 150px;
    height: 50px;
    padding: 5px;
    
    border-radius: 5px;
    background: ${props => props.activation ? 'green'  : 'slategray'};
    cursor: pointer;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    img{
        width:25px;
        height:25px;
    }
    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 14px;
    }
    &:hover{
        background: green;
    }
`