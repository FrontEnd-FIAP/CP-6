import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Carros from './pages/Carros.jsx';

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = pathname === '/carros' ? 'Nossa frota | Aurum Drive' : 'Aurum Drive | Locação de importados';
    if (hash) {
      const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return <BrowserRouter><RouteEffects /><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Navbar /><main id="conteudo" tabIndex={-1}><Routes><Route path="/" element={<Home />} /><Route path="/carros" element={<Carros />} /><Route path="*" element={<div className="container section"><p className="eyebrow">404 / NOVO CAMINHO</p><h1 className="page-title">Esta página não<br /><em>faz parte da rota.</em></h1><Link className="button" to="/">Voltar ao início</Link></div>} /></Routes></main><Footer /></BrowserRouter>;
}
