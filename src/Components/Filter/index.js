import React from 'react';
import * as Styled from './styles';



function Filter(props) {
    return (
        <Styled.Container activation = {props.actived}> {/* Recebe a propriedade active e passa para o container desta linha, que vem de Styled.*/}
            <img src={props.img} alt="FILTRO" />
            <span>{props.title}</span>
        </Styled.Container>
    )
}

export default Filter;