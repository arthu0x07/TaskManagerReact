import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header'
import Filter from '../../Components/Filter';
import * as Styled from './styles'


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <Styled.Global />
                
                <Styled.Container>
                    <Header />
                        <Styled.ContainerFilter>
                            <Filter title="Todos"/>
                            <Filter title="Hoje"/>
                            <Filter title="Semana"/>
                            <Filter title="Mês"/>
                        </Styled.ContainerFilter>
                    <Footer />
                </Styled.Container>
            </>
        );
    }
}

export default Home;