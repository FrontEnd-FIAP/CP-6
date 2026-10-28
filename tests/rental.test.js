import test from 'node:test';
import assert from 'node:assert/strict';
import { cars } from '../src/data/cars.js';
import { civilDay, estimateRental, todayLocal } from '../src/utils/rental.js';
import { filterCars } from '../src/utils/catalog.js';

const car = cars.find((item) => item.id === 'porsche-911');
const valid = { car, pickup: '2026-11-10', dropoff: '2026-11-12', today: '2026-10-27' };
test('2 diárias de Porsche custam R$ 3.780', () => {
  assert.deepEqual(estimateRental(valid).quote, { days: 2, daily: 1890, total: 3780 });
});
test('a data de hoje é aceita e 1 diária não é arredondada para zero', () => {
  assert.equal(
    estimateRental({ ...valid, pickup: valid.today, dropoff: '2026-10-28' }).quote.days,
    1,
  );
});
test('campos ausentes produzem mensagens e nenhum orçamento', () => {
  const result = estimateRental({ today: valid.today });
  assert.equal(Object.keys(result.errors).length, 3);
  assert.equal(result.quote, null);
});
test('retirada passada, devolução igual ou anterior são rejeitadas', () => {
  for (const changes of [
    { pickup: '2026-10-26' },
    { dropoff: valid.pickup },
    { dropoff: '2026-11-09' },
  ]) {
    assert.equal(estimateRental({ ...valid, ...changes }).quote, null);
  }
});
test('datas inexistentes, bissextos e formato são validados', () => {
  for (const value of ['2026-02-29', '2026-11-31', '2026-13-01', '2026-1-01', '', 'invalid'])
    assert.ok(Number.isNaN(civilDay(value)));
  assert.ok(Number.isFinite(civilDay('2028-02-29')));
});
test('mudança de horário de verão não altera diárias civis', () => {
  assert.equal(
    estimateRental({ ...valid, pickup: '2026-10-31', dropoff: '2026-11-02' }).quote.days,
    2,
  );
  assert.equal(
    estimateRental({ ...valid, pickup: '2027-03-13', dropoff: '2027-03-15' }).quote.days,
    2,
  );
});
test('virada do ano e fevereiro bissexto são calculados corretamente', () => {
  assert.equal(
    estimateRental({ ...valid, pickup: '2026-12-31', dropoff: '2027-01-02' }).quote.days,
    2,
  );
  assert.equal(
    estimateRental({ ...valid, pickup: '2028-02-28', dropoff: '2028-03-01' }).quote.days,
    2,
  );
});
test('data mínima usa dia local, sem converter para UTC', () => {
  assert.equal(todayLocal(new Date(2026, 9, 27, 23, 59)), '2026-10-27');
});
test('busca por marca e modelo ignora caixa e acentos', () => {
  assert.equal(filterCars(cars, { query: '  bMw  ' })[0].id, 'bmw-m4');
  assert.equal(filterCars(cars, { query: 'coupe' })[0].id, 'bmw-m4');
});
test('filtros combinam e retornam lista vazia quando não há correspondência', () => {
  assert.equal(filterCars(cars, { query: 'Porsche', category: 'SUV' }).length, 0);
  assert.equal(filterCars(cars, { category: 'SUV' })[0].id, 'range-rover');
});
test('ordenação não altera a frota original', () => {
  const before = cars.map((item) => item.id);
  assert.equal(filterCars(cars, { order: 'menor' })[0].id, 'mini-cooper');
  assert.equal(filterCars(cars, { order: 'maior' })[0].id, 'porsche-911');
  assert.deepEqual(
    cars.map((item) => item.id),
    before,
  );
});
