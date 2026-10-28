import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Brand from './Brand.jsx';
import Icon from './Icon.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" aria-label="Aurum Drive, início" onClick={() => setOpen(false)}>
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/carros">Nossa frota</NavLink>
          <Link to="/#como-funciona">Como funciona</Link>
        </nav>
        <Link to="/carros" className="button button-small desktop-cta">
          Encontre seu carro <Icon name="diagonal" size={17} />
        </Link>
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="mobile-nav container"
          aria-label="Navegação móvel"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setOpen(false);
              menuButton.current?.focus();
            }
          }}
        >
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Início
          </NavLink>
          <NavLink to="/carros" onClick={() => setOpen(false)}>
            Nossa frota
          </NavLink>
          <Link to="/#como-funciona" onClick={() => setOpen(false)}>
            Como funciona
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
