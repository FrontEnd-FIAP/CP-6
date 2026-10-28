import { Link, useSearchParams } from 'react-router-dom';
import { cars, categories } from '../data/cars.js';
import Card from '../components/Card.jsx';
import Icon from '../components/Icon.jsx';
import Simulator from '../components/Simulator.jsx';
import { filterCars } from '../utils/catalog.js';

export default function Carros() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const category = categories.includes(params.get('categoria')) ? params.get('categoria') : '';
  const order = ['menor', 'maior'].includes(params.get('ordem')) ? params.get('ordem') : 'destaques';
  const visible = filterCars(cars, { query, category, order });
  const selected = cars.find((car) => car.id === params.get('veiculo'));
  const filtered = Boolean(query || category || order !== 'destaques');
  function update(key, value, replace = false) {
    setParams((current) => {
      const next = new URLSearchParams(current);
      if (value) next.set(key, value); else next.delete(key);
      return next;
    }, { replace, preventScrollReset: true });
  }
  function clearFilters() {
    setParams((current) => { const next = new URLSearchParams(current); ['q', 'categoria', 'ordem'].forEach((key) => next.delete(key)); return next; }, { preventScrollReset: true });
  }
  function selectCar(id) {
    update('veiculo', id);
  }
  return <div className="container section catalog-section">
    <p className="breadcrumb"><Link to="/">Início</Link><span aria-hidden="true">/</span>Nossa frota</p>
    <div className="catalog-head"><div><p className="eyebrow">A ESCOLHA É SUA. O CAMINHO TAMBÉM.</p><h1 className="page-title">Extraordinário é<br /><em>ir do seu jeito.</em></h1><p className="catalog-intro">Encontre o importado que combina com o seu próximo destino.</p></div><p className="catalog-summary">6 modelos selecionados<br />4 maneiras de explorar o caminho</p></div>
    <section className="filters" aria-label="Filtros da frota"><div className="search-field"><label className="field-label" htmlFor="search">Buscar por marca ou modelo</label><Icon name="search" size={18} /><input className="field" id="search" name="q" type="search" autoComplete="off" placeholder="Ex.: Porsche, BMW…" value={query} onChange={(event) => update('q', event.target.value, true)} /></div><div><label className="field-label" htmlFor="order">Ordenar por</label><select className="field" id="order" name="ordem" autoComplete="off" value={order} onChange={(event) => update('ordem', event.target.value === 'destaques' ? '' : event.target.value)}><option value="destaques">Seleção Aurum</option><option value="menor">Menor diária</option><option value="maior">Maior diária</option></select></div><div className="categories" role="group" aria-label="Categoria do veículo">{['Todos', ...categories].map((value) => <button key={value} type="button" className="category-button" aria-pressed={(value === 'Todos' && !category) || value === category} onClick={() => update('categoria', value === 'Todos' ? '' : value)}>{value}</button>)}</div></section>
    <div className="catalog-layout"><section className="catalog-results" aria-label="Veículos da frota"><div className="results-line"><p role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}</p>{filtered ? <button className="clear-filters" type="button" onClick={clearFilters}>Limpar filtros</button> : null}</div>{visible.length ? <div className="catalog-cards">{visible.map((car, index) => <Card key={car.id} car={car} selected={selected?.id === car.id} onSelect={(id) => { selectCar(id); requestAnimationFrame(() => document.getElementById('pickup')?.focus()); }} priority={index < 2} />)}</div> : <div className="empty-state"><h2>Nenhum carro por aqui.</h2><p>Tente outra marca ou categoria<br />para encontrar seu próximo caminho.</p><button type="button" className="button button-small" onClick={clearFilters}>Ver toda a frota <Icon /></button></div>}<p className="section-disclaimer">Diárias e características ilustrativas. Fotos referenciais dos modelos.</p></section><Simulator car={selected} pickup={params.get('retirada') || ''} dropoff={params.get('devolucao') || ''} onUpdate={update} /></div>
  </div>;
}
