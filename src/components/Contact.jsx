import '../sass/components/contact.scss';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const contactInfos = [
  { name: 'phone', value: '(85) 988710457', icon: <AiOutlinePhone /> },
  { name: 'email', value: 'herbtyh@gmail.com', icon: <AiOutlineMail /> },
];

const contactShare = [
  {
    name: 'linkedin-2',
    link: 'https://www.linkedin.com/in/herbty-hugo-7065b6127/',
    icon: <BsLinkedin />,
  },
  {
    name: 'github-2',
    link: 'https://github.com/HugoCodesBr',
    icon: <BsGithub />,
  },
];

const Contact = () => {
  return (
    <section className="contact">
      <div className="container contact__content">
        <h2 className="title">contato</h2>
        <div className="contact__card">
          <ul>
            {contactInfos.map((info) => (
              <li key={info.name}>
                {info.icon} {info.value}
              </li>
            ))}
          </ul>
          <div className="contact__share">
            <p>Acesse minhas redes:</p>
            <ul>
              {contactShare.map((share) => (
                <li key={share.name}>
                  <a href={share.link}>{share.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
