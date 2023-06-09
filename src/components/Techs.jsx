import '../sass/components/techs.scss';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiSass,
  DiReact,
  DiGit,
  DiFirebase,
} from 'react-icons/di';

const techs = [
  { name: 'HTML5', icon: <DiHtml5 /> },
  { name: 'CSS3', icon: <DiCss3 /> },
  { name: 'Javascript', icon: <DiJsBadge /> },
  { name: 'SASS', icon: <DiSass /> },
  { name: 'ReactJS', icon: <DiReact /> },
  { name: 'Git', icon: <DiGit /> },
  { name: 'Firebase', icon: <DiFirebase /> },
];

const Techs = () => {
  return (
    <section id="techs" className="container techs">
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
