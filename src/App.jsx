import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function App() {
  return <BrowserRouter><nav><Link to="/">Aurum Drive</Link> <Link to="/carros">Carros</Link></nav><Routes><Route path="/" element={<main><h1>Aurum Drive</h1><p>Uma nova perspectiva para o seu caminho.</p></main>} /><Route path="/carros" element={<main><h1>Nossa frota</h1></main>} /></Routes></BrowserRouter>;
}
