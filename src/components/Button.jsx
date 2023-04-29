import '../sass/components/button.scss';

const Button = ({ children, color, link }) => {
  return (
    <a className={`button ${color}`} href={link} target="_blank">
      {children}
    </a>
  );
};

export default Button;
