import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header'
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
                    <Footer />
                </Styled.Container>
            </>
        );
    }
}

export default Home;