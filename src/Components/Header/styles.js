import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: whitesmoke;
  border-bottom: 6px solid #D64933;
  margin-bottom: 5vh;
`;
export const Menu = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;

  a {
    font-size: 20px;
    color: #2B303A;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
    font-family: Roboto;

    padding: 4px 10px;
    border-radius: 5px;

    transition-property: color background-color;
    transition-duration: 0.5s;
  }

  a:hover{
    color: whitesmoke;
    background-color: black;
  }
`;
