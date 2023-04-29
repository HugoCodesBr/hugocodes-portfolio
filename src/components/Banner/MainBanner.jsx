import '../../sass/components/main-banner.scss';
import Banner from '../../assets/banner.png';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import Button from '../Button';
import PersonPhoto from '../../assets/eu.jpg';
import Waves from '../../assets/waves.png';
import { useEffect, useState } from 'react';

const share = [
  {
    name: 'linkedin',
    icon: <BsLinkedin />,
    link: 'https://www.linkedin.com/in/herbty-hugo-7065b6127/',
  },
  {
    name: 'github',
    icon: <BsGithub />,
    link: 'https://github.com/HugoCodesBr',
  },
  {
    name: 'email',
    icon: <GrMail />,
    link: 'mailto:herbtyh@gmail.com?subject=&body=',
  },
];

const text =
  'Aqui você vai encontrar um resumo sobre mim, minha carreira e as tecnologias com que trabalho. Logo a baixo você encontra alguns dos principais projetos em que eu já trabalhei.';

const MainBanner = () => {
  const [textFull, setTextFull] = useState(text);
  const [textOutput, setTextOutput] = useState('');

  useEffect(() => {
    let timer;
    if (textOutput !== textFull) {
      timer = setTimeout(() => {
        setTextOutput(textFull.substring(0, textOutput.length + 1));
      }, 50);
    }
    return () => clearTimeout(timer);
  }, [textFull, textOutput]);

  return (
    <div className="banner" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="banner__text">
        <h2>Olá, seja bem vindo!</h2>
        <p>{textOutput}</p>
      </div>
      <div
        className="person-card animeLeft"
        style={{ backgroundImage: `url(${Waves})` }}
      >
        <div className="card__content">
          <div className="card__photo">
            <img src={PersonPhoto} alt="" />
          </div>
          <div className="card__info">
            <h3>Hugo Frota</h3>
            <p>Desenvolvedor Front-end</p>
          </div>
          <ul className="card__share">
            {share.map((item) => (
              <li id={item.name} key={item.name} alt={item.name}>
                <a href={item.link} target="_blank">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
          <Button color="secondary" link="https://www.google.com">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
