  
import React from 'react'
import * as Styled from './styles'


class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Styled.Container>
                <Styled.Menu>
                    <a href="$">Inicio</a>
                    <a href="$">Tarefas</a>
                </Styled.Menu>
            </Styled.Container>
        )
    }
}



export default Header;