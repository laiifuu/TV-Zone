import count from './modules/helperFunctions/reservationCounter.js';

const reservations = [];

const createObj = (id, username, dateStart, dateEnd) => ({
  id,
  username,
  dateStart,
  dateEnd,
});

const add = (obj) => {
  reservations.push(obj);
};

test('Test Reservation counter function', () => {
  add(createObj(1, 'kareem', '15-12-2022', '16-12-2022'));
  expect(count(reservations)).toBe(1);
});

test('', () => {
  add(createObj(1, 'kareem', '15-12-2022', '16-12-2022'));
  add(createObj(2, 'kareem', '15-12-2022', '16-12-2022'));
  add(createObj(3, 'kareem', '15-12-2022', '16-12-2022'));
  add(createObj(4, 'kareem', '15-12-2022', '16-12-2022'));
  expect(count(reservations)).toBe(5);
});
