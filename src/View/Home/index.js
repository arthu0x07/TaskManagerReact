import React, {useState} from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Filter from '../../Components/Filter';
import * as Styled from './styles';

import TaskCard from '../../Components/TaskCard';

import Imagem from '../../imgs/filter1.png';
import futebol from '../../imgs/futebol.jpg';
import viagem from '../../imgs/viagem.png';
import cinema from '../../imgs/cinema.png';
import lanche from '../../imgs/lanche.jpg';
import prova from '../../imgs/prova.jpg';
import academia from '../../imgs/academia.jpg';
import compra from '../../imgs/compra.jpg';
import trabalho from '../../imgs/trabalho.png';
import styled from 'styled-components';


function Home() {

    const [filterActive, functionFilter] = useState(); {/* Uso do State. */}
  
    return (
      <>
        <Styled.Global />

        <Styled.Container>
          <Header /> {/* Unico uso, renderiza o header.*/}
            <Styled.ContainerFilter> {/* Container Único que engloba todos os botões */}

              {/* Botão que chama a função responsável por atualizar o State, passando um valor.*/}
              <button type='button' onClick={() => functionFilter('todos')}> 
            
              {/* Utilizamos a DIV criada de "Filter" para dentro do botão. */}
              {/* Faz uma condicional com o State, para caso seja igual ao valor atualizado pelo botão, envia True, o que ocasiona na troca ou não de cores na lógica de componentes utilizado.*/}
              <Filter title="Todos" img={Imagem} actived={filterActive == 'todos'}/>
              </button>
    
              <button type='button' onClick={() => functionFilter('hoje')}>
              <Filter title="Hoje" img={Imagem} actived={filterActive == 'hoje'}/>
              </button>
    
              <button type='button' onClick={() => functionFilter('semana')}>
              <Filter title="Semana" img={Imagem} actived={filterActive == 'semana'}/>
              </button>
    
              <button type='button' onClick={() => functionFilter('mes')}>
              <Filter title="Mês" img={Imagem} actived={filterActive == 'mes'}/>
              </button>

            </Styled.ContainerFilter>

            <Styled.ContainerCard>
            <TaskCard img={futebol} title="Futebol"/>
            <TaskCard img={viagem} title="Viagem"/>
            <TaskCard img={academia} title="Academia"/>
            <TaskCard img={lanche} title="Lanche"/>
            <TaskCard img={prova} title="Prova"/>
            <TaskCard img={trabalho} title="Trabalho"/>
            <TaskCard img={cinema} title="Cinema"/>
            <TaskCard img={compra} title="Compra"/>
          </Styled.ContainerCard>

          <Footer /> {/* Unico uso, renderiza o footer.*/}
        </Styled.Container>
      </>
    )
}

export default Home;