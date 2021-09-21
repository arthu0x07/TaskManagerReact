import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
        width: 100%;
`

export const Global = createGlobalStyle`
        *{
                Margin: 0px;
                Padding: 0px;
        }
        
`

export const ContainerFilter = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;

        button{
                background: none;
                border: none;
        }
`