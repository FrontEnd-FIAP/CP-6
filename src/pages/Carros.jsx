import { Link } from 'react-router-dom';
import { cars } from '../data/cars.js';
import Card from '../components/Card.jsx';
export default function Carros() {
  return <div className="container section"><p className="breadcrumb"><Link to="/">Início</Link><span>/</span>Nossa frota</p><p className="eyebrow">A ESCOLHA É SUA. O CAMINHO TAMBÉM.</p><h1 className="page-title">Extraordinário é<br /><em>ir do seu jeito.</em></h1><p className="catalog-intro">Encontre o importado que combina com o seu próximo destino.</p><div className="grid gap-6 md:grid-cols-3">{cars.map((car) => <Card key={car.id} car={car} />)}</div></div>;
}
