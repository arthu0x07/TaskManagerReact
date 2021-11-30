import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: auto;

  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  border-radius: 5px;
  padding: 20px 30px;

  border: 3px solid #7c7c7c;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 25px;
`;

export const TopCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;

  width: 100%;

  h3 {
    margin-top: 30px;
    font-size: 18px;
    font-weigth: 100;
    font-family: Roboto;
    text-transform: capitalize;
    align-self: center;
    color: black;
  }

  img {
    min-width: 70px;
    min-height: 70px;
    max-width: 70px;
    max-height: 70px;

    align-self: start;
  }
`;

export const BottomCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  margin-top: 20px;

  .data {
    font-size: 20px;
    color: #d64933;
    font-family: Roboto;

  }

  .horas {
    font-size: 20px;
    color: #d64933;
    font-family: Roboto;

  }
`;
