import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Filter from "../../Components/Filter";
import * as Styled from "./styles";
import TaskCard from "../../Components/TaskCard";
import Imagem from "../../imgs/filter1.png";
import styled from "styled-components";
import API from "../../service/api";

function Home() {
  const [filterActive, functionFilter] = useState('all');
  const [ObjectTask, setTasks] = useState([]);

  useEffect(() => {
    LoadAllTasks();
  }, [filterActive])

  async function LoadAllTasks() {
    // Configuração da requisição para o backend. Retorna as Tarefas e Seta no State que usaremos para renderizar os componentes de tarefas no futuro.
    let MacAdress = "15:15:15:15:15";
    await API.get(`/task/filter/${filterActive}/${MacAdress}`).then((res) => {
      setTasks(res.data);
    }); // Recebe a rota da requisição apenas, pois a url já fi configurada no outro arquivo.
  }



  return (
    <>
      <Styled.Global />

      <Styled.Container>
        <Header /> {/* Unico uso, renderiza o header.*/}
        <Styled.ContainerFilter>
          {/* Container Único que engloba todos os botões */}
          {/* Botão que chama a função responsável por atualizar o State, passando um valor.*/}
          <button type="button" onClick={() => functionFilter("all")}>
            {/* Utilizamos a DIV criada de "Filter" para dentro do botão. */}
            {/* Faz uma condicional com o State, para caso seja igual ao valor atualizado pelo botão, envia True, o que ocasiona na troca ou não de cores na lógica de componentes utilizado.*/}
            <Filter
              title="Todos"
              img={Imagem}
              actived={filterActive == "all"}
            />
          </button>
          <button type="button" onClick={() => functionFilter("today")}>
            <Filter
              title="Hoje"
              img={Imagem}
              actived={filterActive == "today"}
            />
          </button>
          <button type="button" onClick={() => functionFilter("week")}>
            <Filter
              title="Semana"
              img={Imagem}
              actived={filterActive == "week"}
            />
          </button>
          <button type="button" onClick={() => functionFilter("month")}>
            <Filter
              title="Mês"
              img={Imagem}
              actived={filterActive == "month"}
            />
          </button>
        </Styled.ContainerFilter>
        <Styled.ContainerCard>

          {ObjectTask.map((item) => (
            <TaskCard title={item.title} type={item.type} when={item.when} />
          ))}
          
        </Styled.ContainerCard>
        <Footer /> {/* Unico uso, renderiza o footer.*/}
      </Styled.Container>
    </>
  );
}

export default Home;
