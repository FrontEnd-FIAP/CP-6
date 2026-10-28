export function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}
export function filterCars(cars, { query = '', category = '', order = 'destaques' } = {}) {
  const term = normalize(query);
  const result = cars.filter(
    (car) =>
      (!category || car.category === category) &&
      normalize(`${car.brand} ${car.model}`).includes(term),
  );
  if (order === 'menor') result.sort((a, b) => a.daily - b.daily);
  if (order === 'maior') result.sort((a, b) => b.daily - a.daily);
  return result;
}
