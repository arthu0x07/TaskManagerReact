import React, {useState, useEffect} from 'react';
import * as Styled from './styles';

import api from '../../service/api';

import { Link } from 'react-router-dom';

import imagem from '../../imgs/filter1.png';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';


function Home() {
  const [filterActive, functionFilter] = useState("all");
  const [tasks, setTasks] = useState([]);


  //FUNÇÃO RESPONSÁVEL POR FAZER REQUISIÇÕES INICIAIS PARA O BACKEND
  async function loadTask(){
    await api.get(`/task/filter/${filterActive}/11:11:11:11:11:11`)
    .then((response) => {
      setTasks(response.data);
    })
  }

  useEffect(() => {
    loadTask();
  }, [filterActive])

  /* PAREI AQUIII FALANDO SOBRE O USE EFFECT A A FUNÇÃO DE REQUISIÇÕES */

  return (

    <Styled.Container>
      <Header />
      <Styled.ContainerFilter>
        <button type='button' onClick={() => functionFilter('all')}>
          <Filter title='Todos' Img={imagem} actived={filterActive === 'all'} />
        </button>

        <button type='button' onClick={() => functionFilter('today')}>
          <Filter title='Hoje' Img={imagem} actived={filterActive === 'today'} />
        </button>

        <button type='button' onClick={() => functionFilter('week')}>
          <Filter title='Semana' Img={imagem} actived={filterActive === 'week'} />
        </button>

        <button type='button' onClick={() => functionFilter('month')}>
          <Filter title='Mês' Img={imagem} actived={filterActive === 'month'} />
        </button>
      </Styled.ContainerFilter>

      <Styled.ContainerCard>
         {
           tasks.map(t => <Link to={`/task/${t._id}`}> <TaskCard  type={t.type} title={t.title} when={t.when} /> </Link>)
         }
      </Styled.ContainerCard>

      <Footer /> 
    </Styled.Container>
  )
}

/* RESPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;