import '../sass/components/projects.scss';
import Dogs from '../assets/dogs.jpg';
import MyTasks from '../assets/mytasks.png';
import MoviesLib from '../assets/movieslib.png';
import Chamados from '../assets/chamados.png';
import Duopass from '../assets/duopass.png';
import Iguatemi from '../assets/iguatemi.png';
import Bsurbanismo from '../assets/bsurbanismo.png';
import Cocobambu from '../assets/cocobambu.png';
import Humanize from '../assets/humanize.png';
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
    title: 'Chamados',
    desc: 'Projeto de um dashboard de chamados com login, paginação, adição de clientes e tickets feito em React, React Hooks, Firebase, React Router Dom e SASS',
    thumb: Chamados,
    app: 'https://hugocodes-chamados.netlify.app/',
    github: 'https://github.com/HugoCodesBr/chamados',
  },
  {
    title: 'MoviesLib',
    desc: 'Projeto de uma catálogo de filmes com funções de busca e página internas feito em React consumindo a API do TMDB, usando React Hooks, React Router Dom e Fetch',
    thumb: MoviesLib,
    app: 'https://hugocodes-movieslib.netlify.app/',
    github: 'https://github.com/HugoCodesBr/movies_lib',
  },
  {
    title: 'Duopass',
    desc: 'Projeto de website com foco no turismo feito em Wordpress usando HTML, SASS, Javascript, Jquery e Swiper',
    thumb: Duopass,
    app: 'https://duopass.com.br/',
    github: '',
  },
  {
    title: 'Iguatemi',
    desc: 'Projeto de website para shopping center feito em Wordpress usando HTML, SASS, Javascript, Jquery e Swiper',
    thumb: Iguatemi,
    app: 'https://www.igtfortaleza.com.br/',
    github: '',
  },
  {
    title: 'BS Urbanismo',
    desc: 'Projeto de website para empresa de arquitetura e urbanismo feito em Wordpress usando HTML, SASS, Javascript, Jquery e Swiper',
    thumb: Bsurbanismo,
    app: 'https://www.bsparurbanismo.com.br/',
    github: '',
  },
  {
    title: 'Coco Bambu',
    desc: 'Projeto de website de restaurante feito em Wordpress usando HTML, SASS, Javascript, Jquery e Swiper',
    thumb: Cocobambu,
    app: 'https://cocobambu.com/',
    github: '',
  },
  {
    title: 'Instituto Humanize',
    desc: 'Projeto de website de instituição feito em Wordpress usando HTML, SASS, Javascript, Jquery e Swiper',
    thumb: Humanize,
    app: 'https://www.ihumanize.org/',
    github: '',
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
                {project.github !== '' && (
                  <Button color="primary" link={project.github}>
                    Ver Código
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
