import '../sass/components/projects.scss';
import Dogs from '../assets/dogs.jpg';
import Button from './Button';

const projects = [
  {
    title: 'Dogs',
    desc: 'Projeto de rede social fictícia para cachorros, realizado durante o curso de React da Origamid',
    thumb: Dogs,
    app: 'https://hugocodes-dogs.netlify.app/',
    github: 'https://github.com/HugoCodesBr/dogs',
  },
  {
    title: 'Teste',
    desc: 'Projeto de rede social fictícia para cachorros, realizado durante o curso de React da Origamid',
    thumb: Dogs,
    app: 'https://hugocodes-dogs.netlify.app/',
    github: 'https://github.com/HugoCodesBr/dogs',
  },
  {
    title: 'Projeto',
    desc: 'Projeto de rede social fictícia para cachorros, realizado durante o curso de React da Origamid',
    thumb: Dogs,
    app: 'https://hugocodes-dogs.netlify.app/',
    github: 'https://github.com/HugoCodesBr/dogs',
  },
];

const Projects = () => {
  return (
    <section className="container projects">
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
