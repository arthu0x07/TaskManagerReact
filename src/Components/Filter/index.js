import React from "react";
import * as Styled from "./styles";

function Filter(props) {
  return (
    <Styled.Container activation={props.actived}>
      <span>{props.title}</span>
    </Styled.Container>
  );
}

export default Filter;
