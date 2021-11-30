import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  width: 70%;
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 50px;
    heigth: 50px;
    cursor: pointer;
    margin: 10px;
  }

  button {
    border: none;
    background: none;
  }

  .off {
    opacity: 0.4;
  }
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  input {
    font-size: 16px;
    padding: 15px;
    border-radius: 5px;
    border: 3px solid #D64933;

    :focus-visible {
      outline: 0;
    }
  }
`;

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
     
       input{
           font-size: 16px;
           padding 15px;
           border-radius: 5px;
           border: 3px solid #D64933;

           :focus-visible {
            outline: 0;
          }
       }
`;

export const Option = styled.div`
  margin-top: 40px;
  padding: 0px 50px;

  display: flex;
  justify-content: space-between;

  button {
    font-weight: bold;
    color: black;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 15px;

    transition-property: opacity;
    transition-duration: 1s;

    &:hover {
      opacity: 0.7;
    }
  }

  div {
    display: flex;
    align-items: center;
    font-size: 20px;

    span{
      font-family: Roboto;
      margin-left: 15px;
      color: black;

    }
  }
`;

export const Save = styled.div`
  width: 100%;
  margin-top: 50px;

  button {
    width: 100%;
    background: black;
    border: none;
    padding: 10px 0px;
    font-family: Roboto;
    font-size: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  
    transition-property: background-color;
    transition-duration: 2s;

    :hover{
      background-color: #D64933;
    }
  }
`;
