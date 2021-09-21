import React, {useState} from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Filter from '../../Components/Filter';
import * as Styled from './styles';
import Imagem from '../../imgs/filter.png';


function Home() {

    const [filterActive, functionFilter] = useState(); {/* Uso do State. */}
  
    return (
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
        <Footer /> {/* Unico uso, renderiza o footer.*/}
      </Styled.Container>
    )
}

export default Home;