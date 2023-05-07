import '../sass/components/projects.scss';
import Dogs from '../assets/dogs.jpg';
import MyTasks from '../assets/mytasks.png';
import MoviesLib from '../assets/movieslib.png';
import Button from './Button';

const projects = [
  {
    title: 'Dogs',
    desc: 'Projeto de rede social fictícia para cachorros realizado durante o curso de React da Origamid, usando React Hooks, Consumo de API com o Fetch e CSS modules',
    thumb: Dogs,
    app: 'https://hugocodes-dogs.netlify.app/',
    github: 'https://github.com/HugoCodesBr/dogs',
  },
  {
    title: 'My Tasks',
    desc: 'Projeto de um gerenciador de tarefas com funções de edição, remoção e clonclusão das mesmas feito em React (Layout desenhado pro mim no Figma), usando React Hooks, Local Storage e SASS',
    thumb: MyTasks,
    app: 'https://hugocodes-mytasks.netlify.app/',
    github: 'https://github.com/HugoCodesBr/my-tasks',
  },
  {
    title: 'MoviesLib',
    desc: 'Projeto de uma catálogo de filmes com funções de busca e página internas feito em React consumindo a API do TMDB, usando React Hooks, React Router Dom e Fetch',
    thumb: MoviesLib,
    app: 'https://hugocodes-movieslib.netlify.app/',
    github: 'https://github.com/HugoCodesBr/movies_lib',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container projects">
      <h2 className="title">Projetos</h2>
      <div className="projects__items">
        {projects.map((project) => (
          <div key={project.title} className="projects__item">
            <div className="projects__thumb">
              <img src={project.thumb} alt={project.title} />
            </div>
            <div className="projects__info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="projects__buttons">
                <Button color="secondary" link={project.app}>
                  Ver Projeto
                </Button>
                <Button color="primary" link={project.github}>
                  Ver Código
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
