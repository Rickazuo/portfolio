import './App.css';
import profile from './assets/Foto.jpg'
import js from './assets/js.png'
import react from './assets/react.png'
import html5 from './assets/html-5.png'
import css3 from './assets/css-3.png'
import github from './assets/github.png'
import mysql from './assets/mysql.png'
import linkedin64 from './assets/linkedin64.png'
import cellphone from './assets/cell-phone.png'
import email from './assets/email.png'
import { Project } from './components/Project';

const projects = [{
  image: "oi",
  description: `Sou Engenheiro de Produção que busca aprender e interagir com os novos desafios 
  propostos. No momento estou focando no aprendizado de desenvolvimento WEB, utilizando 
  tecnologias como JavaScript e MySQL. Procuro uma oportunidade de desenvolver e aplicar essas 
  tecnologias com foco em aprofundar meus conhecimentos e entregar resultados para a empresa`,
  tecno: 1,
}]

function App() {
  return (
    <div className='main-container'>
      <header className='header'>
        <img className='image' src={profile} alt='profile'/>
        <div className='resume' >
        <p className='NameTitle'>
        Ricardo Kazuo Diniz Nozaki
        </p>
        <p className='contact'>
          <p>
            <img src={cellphone} alt="smartphone icon"></img>
          Celular: (12) 98172-1089
          </p>
          <p>
            <img src={email} alt="email icon"></img>
          E-mail: ricardo.k.nozaki@gmail.com
          </p>
          <p>
          Cidade: Taubaté-SP
          </p>
          <p >
            <a href='https://www.linkedin.com/in/ricardo-nozaki-2870b5189/'>
            <img width="32px" src={linkedin64} alt="icon linkedin"></img>
            </a>
          </p>
          <p>
            <a href="https://github.com/Rickazuo">
              <img width="32px" src={github} alt="icon github"></img>
            </a>
          </p> 
        </p>
        </div>
      </header>
      <div className='projects'>
        {projects.map(({image, description, tecno}) =>
        <Project 
        image={image}
        description={description}
        tecno={tecno}
        />
        )}
        
      </div>
      <div className='row'>
        <div className='column'>
          <h1>Experiência Profissional</h1>
          <h3>Assistente no Gerenciamento de Processos Internos, Drakkar Solos - Agricultura de
            Precisão (Fev 2020 - Fev 2021)- Estágio
          </h3>
          <ul>
            <li>Identificação e mapeamento de processos;</li>
            <li>Utilização do Bizagi Modeler e Sólides para integração dos processos;</li>
            <li>Implementação de novos sistemas para os colaboradores</li>
          </ul>
          <h3>
          Assistente no Desenvolvimento de projeto de TI, Drakkar Solos - Agricultura de
          Precisão (Fev 2020 - Fev 2021)- Estágio
          </h3>
          <ul>
            <li>Revisão sobre os prótotipos desenvolvidos;</li>
            <li>Auxílio na interpretação das demandas do cliente;</li>
          </ul>
          <h3>
          Assistente de Escritório, Riosul Comércio de Motocicletas (Jan 2008 - Dez 2011) 
          Meio Período
          </h3>
          <ul>
            <li>Lançamento de contas a pagar e a receber;</li>
            <li>Organização do material financeiro no sistema NBS;</li>
            <li>Serviço de manutenção de computadores</li>
          </ul>
        </div>
        <div className='column'>
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
            <img src={js} alt="icone java script"></img>
            <img src={react} alt="icone react"></img>
            <img src={html5} alt="icone html 5"></img>
            <img src={css3} alt="icone css 3"></img>
            <img src={github} alt="icone github"></img>
            <img src={mysql} alt="icone mysql"></img>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
