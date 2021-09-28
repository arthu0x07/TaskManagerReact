import React from 'react';
import * as Styled from './styles';


function TaskCard(props) {
    return (
        <Styled.Container>
            <Styled.TopCard>
                <img src={props.img} alt="tarefa"></img>
                <h3>{props.title}</h3>
            </Styled.TopCard>
            <Styled.BottomCard>
                <p class="data">16/09/2020</p>
                <p class="horas">10:00</p>
            </Styled.BottomCard>
        </Styled.Container>
    )
}

export default TaskCard;