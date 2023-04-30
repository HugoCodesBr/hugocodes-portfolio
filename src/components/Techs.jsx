import '../sass/components/techs.scss';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiSass,
  DiReact,
  DiGit,
  DiBootstrap,
} from 'react-icons/di';

const techs = [
  { name: 'HTML5', icon: <DiHtml5 /> },
  { name: 'CSS3', icon: <DiCss3 /> },
  { name: 'Javascript', icon: <DiJsBadge /> },
  { name: 'SASS', icon: <DiSass /> },
  { name: 'ReactJS', icon: <DiReact /> },
  { name: 'Git', icon: <DiGit /> },
  { name: 'Bootstrap', icon: <DiBootstrap /> },
];

const Techs = () => {
  return (
    <section className="container techs">
      <h2 className="title">TECNOLOGIAS</h2>
      <ul>
        {techs.map((tech) => (
          <li key={tech.name} id={tech.name}>
            {tech.icon}
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Techs;
