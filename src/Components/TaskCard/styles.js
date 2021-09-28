import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 150px;

    box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 25px;
`


export const TopCard = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     margin-bottom: 10px;

     img{
         width: 70px;
         height: 70px;
     }
`


export const BottomCard = styled.div`
     display: flex;
     width: 100%;
     justify-content: space-around;

     .data{
        color: gray;
     }

     .horas{
         color: green;
     }
`