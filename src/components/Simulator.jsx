import { useState } from 'react';
import { cars } from '../data/cars.js';
import { money } from '../utils/format.js';
import { dateLabel, estimateRental, todayLocal } from '../utils/rental.js';
import Icon from './Icon.jsx';

export default function Simulator({ car, pickup, dropoff, onUpdate }) {
  const [submission, setSubmission] = useState(null);
  const signature = `${car?.id || ''}|${pickup}|${dropoff}`;
  const attempted = submission === signature;
  const validation = estimateRental({ car, pickup, dropoff });
  const errors = attempted ? validation.errors : {};
  const quote = attempted ? validation.quote : null;
  function submit(event) {
    event.preventDefault();
    setSubmission(signature);
    const firstError = ['vehicle', 'pickup', 'dropoff'].find((field) => validation.errors[field]);
    if (firstError) event.currentTarget.elements.namedItem(firstError)?.focus();
  }
  return (
    <aside id="simulador" className="simulator" aria-labelledby="simulator-title">
      <p className="eyebrow">SUA PRÓXIMA EXPERIÊNCIA</p>
      <h2 id="simulator-title">Imagine o caminho.</h2>
      {car ? (
        <div className="simulator-preview">
          <img src={car.image} alt="" width="72" height="54" />
          <div>
            <p translate="no">
              {car.brand} {car.model}
            </p>
            <span>{money(car.daily)} / diária</span>
          </div>
        </div>
      ) : (
        <p className="simulator-note">
          Escolha um carro e as datas para descobrir o valor estimado da sua experiência.
        </p>
      )}
      <form noValidate onSubmit={submit}>
        <label className="field-label" htmlFor="vehicle">
          Veículo
        </label>
        <select
          className="field"
          id="vehicle"
          name="vehicle"
          required
          autoComplete="off"
          value={car?.id || ''}
          aria-invalid={Boolean(errors.vehicle)}
          aria-describedby={errors.vehicle ? 'vehicle-error' : undefined}
          onChange={(event) => onUpdate('veiculo', event.target.value)}
        >
          <option value="">Escolha um veículo</option>
          {cars.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.brand} {vehicle.model}
            </option>
          ))}
        </select>
        {errors.vehicle ? (
          <p id="vehicle-error" className="field-error">
            {errors.vehicle}
          </p>
        ) : null}
        <label className="field-label" htmlFor="pickup">
          Data de retirada
        </label>
        <input
          className="field"
          id="pickup"
          name="pickup"
          type="date"
          required
          min={todayLocal()}
          max="9999-12-31"
          autoComplete="off"
          value={pickup}
          aria-invalid={Boolean(errors.pickup)}
          aria-describedby={errors.pickup ? 'pickup-error' : undefined}
          onChange={(event) => onUpdate('retirada', event.target.value)}
        />
        {errors.pickup ? (
          <p id="pickup-error" className="field-error">
            {errors.pickup}
          </p>
        ) : null}
        <label className="field-label" htmlFor="dropoff">
          Data de devolução
        </label>
        <input
          className="field"
          id="dropoff"
          name="dropoff"
          type="date"
          required
          min={pickup || todayLocal()}
          max="9999-12-31"
          autoComplete="off"
          value={dropoff}
          aria-invalid={Boolean(errors.dropoff)}
          aria-describedby={errors.dropoff ? 'dropoff-error' : undefined}
          onChange={(event) => onUpdate('devolucao', event.target.value)}
        />
        {errors.dropoff ? (
          <p id="dropoff-error" className="field-error">
            {errors.dropoff}
          </p>
        ) : null}
        <button className="button" type="submit">
          Calcular estimativa <Icon size={18} />
        </button>
        <div aria-live="polite" aria-atomic="true">
          {attempted && Object.keys(errors).length ? (
            <p className="sr-only">Revise os campos indicados para calcular a estimativa.</p>
          ) : null}
          {quote ? (
            <section className="estimate" aria-labelledby="estimate-title">
              <h3 id="estimate-title">Seu próximo caminho</h3>
              <p className="simulator-note">
                {dateLabel(pickup)} a {dateLabel(dropoff)}
              </p>
              <dl>
                <div>
                  <dt>Diária</dt>
                  <dd>{money(quote.daily)}</dd>
                </div>
                <div>
                  <dt>Período</dt>
                  <dd>
                    {quote.days} {quote.days === 1 ? 'diária' : 'diárias'}
                  </dd>
                </div>
                <div className="estimate-total">
                  <dt>Total estimado</dt>
                  <dd>{money(quote.total)}</dd>
                </div>
              </dl>
              <p>Somente diárias. Taxas, seguros e caução não estão incluídos.</p>
            </section>
          ) : null}
        </div>
      </form>
      <p className="simulator-note">
        <strong>Uma simulação, novas possibilidades.</strong>
        <br />
        Valores ilustrativos. Nenhuma reserva ou cobrança é realizada.
      </p>
    </aside>
  );
}
