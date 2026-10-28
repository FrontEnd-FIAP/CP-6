const DAY = 86_400_000;
export function todayLocal(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
}
// Compare calendar days in UTC; elapsed local hours can vary at DST boundaries.
export function civilDay(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return NaN;
  const [year, month, day] = value.split('-').map(Number);
  if (year < 1000 || year > 9999) return NaN;
  const timestamp = Date.UTC(year, month - 1, day);
  const parsed = new Date(timestamp);
  return parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
    ? timestamp / DAY
    : NaN;
}
export function estimateRental({ car, pickup, dropoff, today = todayLocal() }) {
  const errors = {};
  const start = civilDay(pickup);
  const end = civilDay(dropoff);
  if (!car) errors.vehicle = 'Escolha um veículo da frota para simular.';
  if (!Number.isFinite(start)) errors.pickup = 'Informe uma data válida para a retirada.';
  else if (start < civilDay(today))
    errors.pickup = 'Escolha hoje ou uma data futura para a retirada.';
  if (!Number.isFinite(end)) errors.dropoff = 'Informe uma data válida para a devolução.';
  else if (Number.isFinite(start) && end <= start)
    errors.dropoff = 'Escolha uma devolução posterior à retirada.';
  if (Object.keys(errors).length) return { errors, quote: null };
  const days = end - start;
  return { errors, quote: { days, daily: car.daily, total: days * car.daily } };
}
const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});
export function dateLabel(value) {
  return dateFormatter.format(new Date(civilDay(value) * DAY));
}
