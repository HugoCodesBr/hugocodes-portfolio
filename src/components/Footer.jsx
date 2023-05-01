import '../sass/components/footer.scss';
import SquareLogo from '../assets/hugocodes-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__content">
          <p>Hugo Codes. Alguns direitos reservados.</p>
          <img src={SquareLogo} alt="hugocodes logo" />
        </div>
      </div>
      <div className="footer__end">
        <p>Obrigado pela visita!</p>
      </div>
    </footer>
  );
};

export default Footer;
