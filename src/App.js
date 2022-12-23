import './App.css';
import profile from './assets/Foto.jpg'
import { Divider } from '@mui/material';
import { Project } from './components/Project';

const projects = [{
  image: 1,
  description: 1,
  tecno: 1,
},
{
  image: 1,
  description: 1,
  tecno: 1,
}]

function App() {
  return (
    <div className='main-container'>
      <header className='header'>
      <Divider />
        <img className='image' src={profile} alt='profile'/>
        <div className='resume' ></div>
        <p>
        Sou Engenheiro de Produção que busca aprender e interagir com os novos desafios propostos.
        No momento estou focando no aprendizado de desenvolvimento WEB, utilizando tecnologias
        como JavaScript e MySQL.
        Procuro uma oportunidade de desenvolver e aplicar essas tecnologias com foco em aprofundar
        meus conhecimentos e entregar resultados para a empresa
        </p>
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
    </div>
  );
}

export default App;
