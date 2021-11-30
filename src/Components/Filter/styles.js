import styled from "styled-components";

export const Container = styled.div`
    width: 150px;
    height: 50px;
    padding: 5px;
    
    border-radius: 5px;
    background: ${props => props.activation ? '#D64933'  : 'slategray'};
    cursor: pointer;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    transition-property: background;
    transition-duration: 0.5s;

    span{
        color: #FFF;
        font-weight: bold;
        align-self: center;
        font-size: 14px;
        font-family: Roboto;
    }
    &:hover{
        background: #D64933;
    }
`