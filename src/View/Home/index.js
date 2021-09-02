import React from 'react';
import Header from '../../Components/Header'
import * as Styled from './styles'


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <Styled.Container>
                    <Header />
                </Styled.Container>
            </>
        );
    }
}

export default Home;