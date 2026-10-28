import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { money } from '../utils/format.js';

export default function Card({ car, selected = false, onSelect, priority = false }) {
  const label = `Simular locação de ${car.brand} ${car.model}`;
  return (
    <article className={`car-card ${selected ? 'is-selected' : ''}`}>
      <div className="car-image">
        <img
          src={car.image}
          alt={car.alt}
          width="1400"
          height="900"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
        <span className="car-category">{car.category}</span>
        {selected ? (
          <span className="selected-mark">
            <Icon name="check" size={16} />
            <span className="sr-only">Selecionado</span>
          </span>
        ) : null}
      </div>
      <div className="car-content">
        <p className="car-brand" translate="no">
          {car.brand}
        </p>
        <h3 translate="no">{car.model}</h3>
        <p className="car-tagline">{car.tag}</p>
        <div className="car-specs">
          <span>
            <Icon name="people" size={16} />
            {car.seats} lugares
          </span>
          <span>
            <Icon name="gear" size={16} />
            {car.transmission}
          </span>
        </div>
        <div className="car-bottom">
          <p>
            <strong>{money(car.daily)}</strong>
            <span> / diária</span>
          </p>
          {onSelect ? (
            <button
              type="button"
              className="card-action"
              aria-label={label}
              aria-pressed={selected}
              onClick={() => onSelect(car.id)}
            >
              <Icon name={selected ? 'check' : 'diagonal'} />
            </button>
          ) : (
            <Link
              className="card-action"
              to={`/carros?veiculo=${car.id}#simulador`}
              aria-label={label}
            >
              <Icon name="diagonal" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
