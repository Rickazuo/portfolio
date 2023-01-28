import React from "react";
import { render } from "react-dom";

import './App.css';
import js from './assets/js.png'
import react from './assets/react.png'
import html5 from './assets/html-5.png'
import css3 from './assets/css-3.png'
import github from './assets/github.png'
import mysql from './assets/mysql.png'

import { Resume } from './components/Resume';
import Background from './components/background';
import Carousel from './Carousel';


const resume = [{
  aboutMe: `Sou Engenheiro de Produção que busca aprender e interagir com os novos desafios 
  propostos. No momento estou focando no aprendizado de desenvolvimento WEB, utilizando 
  tecnologias como JavaScript e MySQL. Procuro uma oportunidade de desenvolver e aplicar essas 
  tecnologias com foco em aprofundar meus conhecimentos e entregar resultados para a empresa.`,
}]


function App() {
  return (
    <div className='main-container' >
      <Background/>
      <div className='resume-body'>
      <div>
        {resume.map(({aboutMe}) =>
        <Resume 
        aboutMe={aboutMe}
        />
        )}
      </div>
      <div className='body-part'>
      <div className='row'>
        <div className='column left-column'>
          <h1>Experiência Profissional</h1>
        <Carousel />
        </div>
        <div className='column right-column'>
          <h1>Formação Acadêmica</h1>
          <h3>Graduado em Engenharia de Produção</h3>
          <p>Universidade Federal de Santa Maria (2017-2022)</p>
          <h3>Graduação Incompleta em Engenharia de Computação</h3>
          <p>Universidade Federal de Santa Maria (2012-2017)</p>
          <h3>Ensino Médio</h3>
          <p>Colégio Santíssima Tridade, Cruz Alta - RS (2009 - 2011)</p>
          <h1>Habilidades e Interesses</h1>
          <ul>
            <li>Pacote Office;</li>
            <li>Inglês intermediário;</li>
            <li>Rápida adaptação ao uso de ferramentas e softwares;</li>
            <li>Cerfiticação Green Belt (Udemy);</li>
            <li>Aprofundando meu conhecimento em desenvolvimento de software na
              plataforma RocketSeat.
            </li>
            <li>Tecnologias:</li>
            <div className='icons'>
            <img width="32px" src={js} alt="icone java script"></img>
            <img width="32px" src={react} alt="icone react"></img>
            <img width="32px" src={html5} alt="icone html 5"></img>
            <img width="32px" src={css3} alt="icone css 3"></img>
            <img width="32px" src={github} alt="icone github"></img>
            <img width="32px" src={mysql} alt="icone mysql"></img>
            </div>
          </ul>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
export default App;
