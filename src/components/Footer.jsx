import { Link } from 'react-router-dom';
import Brand from './Brand.jsx';
import Icon from './Icon.jsx';

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-top"><div><Link to="/" aria-label="Aurum Drive, início"><Brand /></Link><p>O prazer está no caminho.</p></div><nav aria-label="Navegação do rodapé"><Link to="/carros">Explore a frota <Icon size={17} /></Link><Link to="/#como-funciona">Como funciona</Link><Link to="/#duvidas">Dúvidas frequentes</Link></nav><div className="footer-note"><span className="eyebrow">FEITO PARA INSPIRAR</span><p>Escolha o carro.<br />Imagine a sua próxima viagem.</p></div></div><div className="container footer-bottom"><span>Aurum Drive · Projeto acadêmico</span><span>Valores ilustrativos. Sem reservas reais.</span></div></footer>;
}
